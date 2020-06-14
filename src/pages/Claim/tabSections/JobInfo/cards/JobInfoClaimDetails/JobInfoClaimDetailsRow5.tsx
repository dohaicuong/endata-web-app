import React from 'react'

import FormGridField from 'components/FormGridField'
import DistributorComboBox from 'dataComponents/DistributorComboBox'
import PdsReferenceComboBox from 'dataComponents/PdsReferenceComboBox'
import SwitchField from 'components/Formik/SwitchField'
import MoneyField from 'components/FormikCustom/MoneyField'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoClaimDetailsRow5_claim$key } from './__generated__/JobInfoClaimDetailsRow5_claim.graphql'
import { JobInfoClaimDetailsRow5_optionData$key } from './__generated__/JobInfoClaimDetailsRow5_optionData.graphql'
import { useFormikContext } from 'formik'

type JobInfoClaimDetailsRow5Props = {
  claim: JobInfoClaimDetailsRow5_claim$key | null
  optionData: JobInfoClaimDetailsRow5_optionData$key | null
}

const JobInfoClaimDetailsRow5: React.FC<JobInfoClaimDetailsRow5Props> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow5_claim on ClaimJob {
        insurer {
          policyTypeSuppliersView
          policyCoverSuppliersView
        }

        policyType {
          policyTypeId
        }
        policyCover {
          policyCoverId
        }

        restoration {
          toCollectExcess
          excessValue
          sumInsured
        }
      }
    `,
    props.claim
  )

  const optionData = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow5_optionData on Query {
        ...DistributorComboBox_data @arguments(companyIds: $companyId)
        ...PdsReferenceComboBox_data @arguments(companyIds: $companyId)
      }
    `,
    props.optionData
  )

  const { setFieldValue } = useFormikContext()
  React.useEffect(() => {
    setFieldValue('policyTypeId', claim?.policyType?.policyTypeId, false)
    setFieldValue('policyCoverId', claim?.policyCover?.policyCoverId, false)
    setFieldValue(
      'portfolios[2].toCollectExcess',
      claim?.restoration?.toCollectExcess ?? false,
      false
    )
    setFieldValue(
      'portfolios[2].excessValue',
      claim?.restoration?.excessValue ?? 0,
      false
    )
    setFieldValue(
      'portfolios[2].sumInsured',
      claim?.restoration?.sumInsured ?? 0,
      false
    )
    // eslint-disable-next-line
  }, [])

  const isCollectRestorationExcess =
    claim?.restoration?.toCollectExcess !== null
  return (
    <>
      <FormGridField
        unMountOn={claim?.insurer?.policyTypeSuppliersView ?? false}
        component={
          <DistributorComboBox
            label="Distributor"
            name="policyTypeId"
            required={true}
            data={optionData}
          />
        }
      />
      <FormGridField
        unMountOn={claim?.insurer?.policyCoverSuppliersView ?? false}
        component={
          <PdsReferenceComboBox
            label="PDS Reference"
            name="policyCoverId"
            required={true}
            data={optionData}
          />
        }
      />
      <FormGridField
        md={2}
        component={
          <SwitchField
            label="Restorer Collect Excess"
            name="portfolios[2].toCollectExcess"
            disabled={!isCollectRestorationExcess}
          />
        }
      />
      <FormGridField
        md={2}
        component={
          <MoneyField
            label="Excess"
            name="portfolios[2].excessValue"
            required={isCollectRestorationExcess}
            disabled={!isCollectRestorationExcess}
            fixedDecimal={false}
            decimalScale={0}
            format="#########"
          />
        }
      />
      <FormGridField
        md={2}
        component={
          <MoneyField
            label="Sum Insured"
            name="portfolios[2].sumInsured"
            required={isCollectRestorationExcess}
            disabled={!isCollectRestorationExcess}
            fixedDecimal={false}
            decimalScale={0}
            format="#########"
          />
        }
      />
    </>
  )
}
export default JobInfoClaimDetailsRow5
