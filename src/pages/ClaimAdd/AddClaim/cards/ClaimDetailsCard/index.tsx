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
import MoneyField from 'components/FormikCustom/MoneyField'

import EventIcon from '@material-ui/icons/Event'
import LinkIcon from '@material-ui/icons/Link'
import FaceIcon from '@material-ui/icons/Face'
import RestorePageIcon from '@material-ui/icons/RestorePage'

import { useFormikContext } from 'formik'

import CaseManagerComboBox from 'dataComponents/CaseManagerComboBox'
import ExternalLossAdjusterComboBox from 'dataComponents/ExternalLossAdjusterComboBox'
import BuilderComboBox from 'dataComponents/BuilderComboBox'
import RestorerComboBox from 'dataComponents/RestorerComboBox'
import EventTypeComboBox from 'dataComponents/EventTypeComboBox'
import CatCodeComboBox from 'dataComponents/CatCodeComboBox'
import DistributorComboBox from 'dataComponents/DistributorComboBox'
import PdsReferenceComboBox from 'dataComponents/PdsReferenceComboBox'
import SpecialistReviewComboBox from 'dataComponents/SpecialistReviewComboBox'
import InsuranceCompanyInfo from 'dataComponents/InsuranceCompanyInfo'

type ClaimDetailsCardProps = {
  company: ClaimDetailsCard_company$key | null
  optionData: ClaimDetailsCard_optionData$key | null
}
const ClaimDetailsCard: React.FC<ClaimDetailsCardProps> = props => {
  const { values } = useFormikContext<any>()
  const hasBuilding = values?.meta?.portfolio?.includes('Building')
  const hasContents = values?.meta?.portfolio?.includes('Contents')
  const hasRestoration = values?.meta?.portfolio?.includes('Restoration')

  const selectedPostcode =
    values?.incidentDetail?.riskAddress?.postcode ?? undefined

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
        ...InsuranceCompanyInfo_company
      }
    `,
    props.company
  )

  const optionData = useFragment(
    graphql`
      fragment ClaimDetailsCard_optionData on Query {
        me: currentUser {
          userType
        }

        # Case Managers
        ...CaseManagerComboBox_data @arguments(companyIds: $companyId)
        # External Loss Adjusting Firm
        ...ExternalLossAdjusterComboBox_data
          @arguments(companyIds: $companyId, postcode: $postcode)
        # Builder
        ...BuilderComboBox_data
          @arguments(companyIds: $companyId, postcode: $postcode)
        # Restorer
        ...RestorerComboBox_data
          @arguments(companyIds: $companyId, postcode: $postcode)
        # Event type
        ...EventTypeComboBox_data @arguments(companyIds: $companyId)
        # Cat code
        ...CatCodeComboBox_data @arguments(companyIds: $companyId)
        # Distributor
        ...DistributorComboBox_data @arguments(companyIds: $companyId)
        # PDS reference
        ...PdsReferenceComboBox_data @arguments(companyIds: $companyId)
        # Specialist review
        ...SpecialistReviewComboBoxProps_data @arguments(companyIds: $companyId)
        # BC/BRC/Loss Adjuster
        ...CaseManagerComboBox_data @arguments(companyIds: $companyId)
      }
    `,
    props.optionData
  )

  const renderFieldWithLoader = (label: string, component: any) => {
    return (
      <React.Suspense fallback={<FieldLoading label={label} />}>
        {component}
      </React.Suspense>
    )
  }

  return (
    <Card title="Claim Details">
      <Grid container spacing={3}>
        {/* ROW 1 */}
        {renderField({
          component: InsuranceCompanyInfo,
          company: company,
          label: 'Insurance Company',
        })}
        {renderField({
          component: DateField,
          label: 'Incident Date',
          name: 'incidentDetail.incidentDate',
          required: true,
          startAdornment: <EventIcon />,
        })}
        {renderField({
          component: CaseManagerComboBox,
          label: 'Case Manager',
          name: 'casemanagerId',
          required: true,
          data: optionData,
        })}
        {renderFieldWithLoader(
          'External Loss Adjusting Firm',
          renderField({
            component: ExternalLossAdjusterComboBox,
            label: 'External Loss Adjusting Firm',
            name: 'externalLossAdjusterId',
            data: optionData,
            selectedPostcode,
          })
        )}

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
          'Builder',
          renderField({
            component: BuilderComboBox,
            label: 'Builder',
            name: 'portfolios[0].scopingSupplierId',
            disabled: !hasBuilding || !selectedPostcode,
            required: true,
            data: optionData,
            selectedPostcode,
          })
        )}
        {renderFieldWithLoader(
          'Restorer',
          renderField({
            component: RestorerComboBox,
            label: 'Restorer',
            name: 'portfolios[2].scopingSupplierId',
            disabled: !hasRestoration || !selectedPostcode,
            required: true,
            data: optionData,
            selectedPostcode,
          })
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
        {renderField({
          component: EventTypeComboBox,
          data: optionData,
          label: 'Event Type',
          name: 'incidentDetail.eventTypeId',
          required: true,
        })}
        {renderField({
          component: CatCodeComboBox,
          data: optionData,
          label: 'Catastrophe Code',
          name: 'incidentDetail.catCodeId',
          required: true,
        })}
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
        {renderField({
          component: DistributorComboBox,
          data: optionData,
          label: 'Distributor',
          name: 'policyTypeId',
          required: true,
          unMountOn: !company?.policyTypeSuppliersView,
        })}
        {renderField({
          component: PdsReferenceComboBox,
          data: optionData,
          label: 'PDS Reference',
          name: 'policyCoverId',
          required: true,
          unMountOn: !company?.policyCoverSuppliersView,
        })}
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
        {renderField({
          component: SpecialistReviewComboBox,
          data: optionData,
          label: 'Specialist Review',
          name: 'homeAssessorId',
          required: true,
          // unMountOn: !company?.useInternalAssessor,
        })}

        {/* ROW 7 */}
        {renderField({
          component: CaseManagerComboBox,
          label: 'BC/BRC/Loss Adjuster',
          name: 'brcId',
          required: true,
          unMountOn:
            !company?.cm2nd || optionData?.me?.userType !== 'Administrator',
          startAdornment: <RestorePageIcon />,
          data: optionData,
        })}

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

const FieldLoading = ({ label }: any) => {
  return renderField({
    component: ComboBoxField,
    name: 'loading',
    label,
    options: [],
    startAdornment: <EventIcon />,
    loading: true,
  })
}
