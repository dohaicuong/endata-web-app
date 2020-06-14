import React from 'react'

import Info from 'components/Info'
import SwitchField from 'components/Formik/SwitchField'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoClaimDetailsRow3_claim$key } from './__generated__/JobInfoClaimDetailsRow3_claim.graphql'
import MoneyField from 'components/FormikCustom/MoneyField'
import FormGridField from 'components/FormGridField'
import { useFormikContext } from 'formik'

type JobInfoClaimDetailsRow3Props = {
  claim: JobInfoClaimDetailsRow3_claim$key | null
}
const JobInfoClaimDetailsRow3: React.FC<JobInfoClaimDetailsRow3Props> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow3_claim on ClaimJob {
        lodgeDate

        incidentDetail {
          hold
        }
        insurer {
          quickrepair
        }

        building {
          toCollectExcess
          excessValue
          sumInsured
        }
      }
    `,
    props.claim
  )

  const { setFieldValue } = useFormikContext()
  React.useEffect(() => {
    setFieldValue('hold', claim?.incidentDetail?.hold ?? false, false)
    setFieldValue(
      'portfolios[0].toCollectExcess',
      claim?.building?.toCollectExcess ?? false,
      false
    )
    setFieldValue(
      'portfolios[0].excessValue',
      claim?.building?.excessValue ?? 0,
      false
    )
    setFieldValue(
      'portfolios[0].sumInsured',
      claim?.building?.sumInsured ?? 0,
      false
    )
    // eslint-disable-next-line
  }, [])

  const isCollectBuildingExcess = claim?.building?.toCollectExcess !== null
  return (
    <>
      <FormGridField
        component={<Info label="FNOL" name="hold" value={claim?.lodgeDate} />}
      />
      <FormGridField
        unMountOn={!claim?.insurer?.quickrepair}
        component={
          <SwitchField label="Scope & Repair (Quick Repair)" name="hold" />
        }
      />
      <FormGridField
        md={2}
        component={
          <SwitchField
            label="Builder Collect Excess"
            name="portfolios[0].toCollectExcess"
            disabled={!isCollectBuildingExcess}
          />
        }
      />
      <FormGridField
        md={2}
        component={
          <MoneyField
            label="Excess"
            name="portfolios[0].excessValue"
            required={isCollectBuildingExcess}
            disabled={!isCollectBuildingExcess}
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
            name="portfolios[0].sumInsured"
            required={isCollectBuildingExcess}
            disabled={!isCollectBuildingExcess}
            fixedDecimal={false}
            decimalScale={0}
            format="#########"
          />
        }
      />
    </>
  )
}
export default JobInfoClaimDetailsRow3
