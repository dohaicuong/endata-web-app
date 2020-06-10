import React from 'react'
import Card from 'components/Card'
import { Grid } from '@material-ui/core'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimDetailsCard_company$key } from './__generated__/ClaimDetailsCard_company.graphql'
import { ClaimDetailsCard_optionData$key } from './__generated__/ClaimDetailsCard_optionData.graphql'

import renderField from '../renderField'
import ComboBoxField from 'components/Formik/ComboBoxField'
import RefNumberField from 'components/FormikCustom/RefNumberField'
import DateField from 'components/Formik/DateField'
import InfoField from 'components/Formik/InfoField'
import SwitchField from 'components/Formik/SwitchField'

import EventIcon from '@material-ui/icons/Event'
import LinkIcon from '@material-ui/icons/Link'
import FaceIcon from '@material-ui/icons/Face'

import InsuranceCompany from './InsuranceCompany'
import CaseManager from './CaseManager'
import ExternalLossFirm from './ExternalLossFirm'
import { useFormikContext } from 'formik'
import Builder from './Builder'
import Restorer from './Restorer'
import MoneyField from 'components/FormikCustom/MoneyField'
import EventType from './EventType'
import CatCode from './CatCode'
import Distributor from './Distributor'
import PdsReference from './PdsReference'
import SpecialistReview from './SpecialistReview'
import LossAdjuster from './LossAdjuster'

type ClaimDetailsCardProps = {
  company: ClaimDetailsCard_company$key | null
  optionData: ClaimDetailsCard_optionData$key | null
}
const ClaimDetailsCard: React.FC<ClaimDetailsCardProps> = props => {
  const { values } = useFormikContext<any>()
  const hasBuilding = values?.meta?.portfolio?.includes('Building')
  const hasContents = values?.meta?.portfolio?.includes('Contents')
  const hasRestoration = values?.meta?.portfolio?.includes('Restoration')

  const company = useFragment(
    graphql`
      fragment ClaimDetailsCard_company on CompanyProfile {
        companyName
        contentsref
        quickrepair
        policyTypeSuppliersView
        policyCoverSuppliersView
        isToProvideSiteReportView
        useInternalAssessor
        enableMultipleRisks
        cm2nd
        ...InsuranceCompany_company
      }
    `,
    props.company
  )

  const optionData = useFragment(
    graphql`
      fragment ClaimDetailsCard_optionData on Query {
        ...CaseManager_options
        ...ExternalLossFirm_options
          @arguments(companyId: $companyId, postcode: $postcode)
        ...Builder_options
          @arguments(companyId: $companyId, postcode: $postcode)
        ...Restorer_options
          @arguments(companyId: $companyId, postcode: $postcode)
        ...EventType_options
        ...CatCode_options
        ...Distributor_options
        ...PdsReference_options
        ...SpecialistReview_options
        ...LossAdjuster_options
        me: currentUser {
          userType
        }
      }
    `,
    props.optionData
  )

  const renderFieldWithLoader = (component: any) => {
    return (
      <React.Suspense fallback={<FieldLoading />}>{component}</React.Suspense>
    )
  }

  return (
    <Card title="Claim Details">
      <Grid container spacing={3}>
        {/* ROW 1 */}
        <InsuranceCompany company={company} />
        {renderField({
          component: DateField,
          label: 'Incident Date',
          name: 'incidentDetail.incidentDate',
          required: true,
          startAdornment: <EventIcon />,
        })}
        <CaseManager options={optionData} />
        {renderFieldWithLoader(<ExternalLossFirm options={optionData} />)}

        {/* ROW 2 */}
        {renderField({
          component: RefNumberField,
          label: 'Insurance Ref#',
          name: 'refNumber',
          required: true,
          startAdornment: <LinkIcon />,
        })}
        {renderField({
          component: RefNumberField,
          label: 'Contents Ref#',
          name: 'contentsRefNum',
          unMountOn: !hasBuilding || !company?.contentsref,
          startAdornment: <LinkIcon />,
        })}
        {renderFieldWithLoader(
          <Builder options={optionData} hasBuilding={hasBuilding} />
        )}
        {renderFieldWithLoader(
          <Restorer options={optionData} hasRestoration={hasRestoration} />
        )}

        {/* ROW 3 */}
        {renderField({
          component: InfoField,
          label: 'FNOL',
          name: 'meta.fnol',
          startAdornment: <EventIcon />,
          variant: 'standard',
        })}
        {renderField({
          component: SwitchField,
          label: 'Scope & Repair (Quick Repair)',
          name: 'incidentDetail.hold',
          unMountOn: !company?.quickrepair,
        })}
        {renderField({
          md: 2,
          component: SwitchField,
          label: 'Builder Collect Excess',
          name: 'portfolios[0].toCollectExcess',
          disabled: !hasBuilding,
        })}
        {renderField({
          md: 2,
          component: MoneyField,
          fixedDecimal: false,
          decimalScale: 0,
          format: '#########',
          label: 'Excess',
          name: 'portfolios[0].excessValue',
          required: hasBuilding,
          disabled: !hasBuilding,
        })}

        {/* ROW 4 */}
        {renderField({
          md: 2,
          component: MoneyField,
          fixedDecimal: false,
          decimalScale: 0,
          format: '#########',
          label: 'Sum Insured',
          name: 'portfolios[0].sumInsured',
          required: hasBuilding,
          disabled: !hasBuilding,
        })}
        <EventType options={optionData} />
        <CatCode options={optionData} />
        {renderField({
          md: 2,
          component: SwitchField,
          label: 'Contents Provider Collect Excess',
          name: 'portfolios[1].toCollectExcess',
          disabled: !hasContents,
        })}
        {renderField({
          md: 2,
          component: MoneyField,
          fixedDecimal: false,
          decimalScale: 0,
          format: '#########',
          label: 'Excess',
          name: 'portfolios[1].excessValue',
          required: hasContents,
          disabled: !hasContents,
        })}
        {renderField({
          md: 2,
          component: MoneyField,
          fixedDecimal: false,
          decimalScale: 0,
          format: '#########',
          label: 'Sum Insured',
          name: 'portfolios[1].sumInsured',
          required: hasContents,
          disabled: !hasContents,
        })}

        {/* ROW 5 */}
        <Distributor
          options={optionData}
          unMountOn={!company?.policyTypeSuppliersView}
        />
        <PdsReference
          options={optionData}
          unMountOn={!company?.policyCoverSuppliersView}
        />
        {renderField({
          md: 2,
          component: SwitchField,
          label: 'Restorer Collect Excess',
          name: 'portfolios[2].toCollectExcess',
          disabled: !hasRestoration,
        })}
        {renderField({
          md: 2,
          component: MoneyField,
          fixedDecimal: false,
          decimalScale: 0,
          format: '#########',
          label: 'Excess',
          name: 'portfolios[2].excessValue',
          required: hasRestoration,
          disabled: !hasRestoration,
        })}
        {renderField({
          md: 2,
          component: MoneyField,
          fixedDecimal: false,
          decimalScale: 0,
          format: '#########',
          label: 'Sum Insured',
          name: 'portfolios[2].sumInsured',
          required: hasRestoration,
          disabled: !hasRestoration,
        })}

        {/* ROW 6 */}
        {renderField({
          component: SwitchField,
          label: 'Make Safe Required',
          name: 'incidentDetail.makeSafeRequired',
        })}
        {renderField({
          component: SwitchField,
          label: 'Supplier(s) to provide Site Report and Scope of Works',
          name: 'meta.toProvideSiteReport',
          unMountOn: !company?.isToProvideSiteReportView,
        })}
        {renderField({
          label: 'Additional Ref#',
          name: 'additionalRefNumber',
          startAdornment: <LinkIcon />,
        })}
        <SpecialistReview
          options={optionData}
          unMountOn={!company?.useInternalAssessor}
        />

        {/* ROW 7 */}
        <LossAdjuster
          options={optionData}
          unMountOn={
            !company?.cm2nd || optionData?.me?.userType !== 'Administrator'
          }
        />
        {renderField({
          label: 'Risk Name',
          name: 'riskname',
          unMountOn: !company?.enableMultipleRisks,
          startAdornment: <FaceIcon />,
        })}
      </Grid>
    </Card>
  )
}
export default ClaimDetailsCard

const FieldLoading = () => {
  return renderField({
    component: ComboBoxField,
    name: 'loading',
    options: [],
    startAdornment: <EventIcon />,
    loading: true,
  })
}
