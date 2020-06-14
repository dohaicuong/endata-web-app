import React from 'react'

import { parse } from 'date-fns'
import FormGridField from 'components/FormGridField'
import Info from 'components/Info'
import DateField from 'components/Formik/DateField'
import CaseManagerComboBox from 'dataComponents/CaseManagerComboBox'
import ExternalLossAdjusterComboBox from 'dataComponents/ExternalLossAdjusterComboBox'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoClaimDetailsRow1_claim$key } from './__generated__/JobInfoClaimDetailsRow1_claim.graphql'
import { JobInfoClaimDetailsRow1_optionData$key } from './__generated__/JobInfoClaimDetailsRow1_optionData.graphql'
import { useFormikContext } from 'formik'

type JobInfoClaimDetailsRow1Props = {
  claim: JobInfoClaimDetailsRow1_claim$key | null
  optionData: JobInfoClaimDetailsRow1_optionData$key | null
}
const JobInfoClaimDetailsRow1: React.FC<JobInfoClaimDetailsRow1Props> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow1_claim on ClaimJob {
        insurer {
          companyName
        }
        incidentDetail {
          incidentDate
        }
        caseManager {
          managerId
        }
        externalLossAdjuster {
          companyId
        }
      }
    `,
    props.claim
  )

  const optionData = useFragment(
    graphql`
      fragment JobInfoClaimDetailsRow1_optionData on Query {
        ...CaseManagerComboBox_data @arguments(companyIds: $companyId)
        ...ExternalLossAdjusterComboBox_data @arguments(companyIds: $companyId)
      }
    `,
    props.optionData
  )

  const { setFieldValue } = useFormikContext()
  React.useEffect(() => {
    setFieldValue(
      'incidentDate',
      parse(
        String(claim?.incidentDetail?.incidentDate),
        'dd/MM/yyyy',
        new Date()
      ),
      false
    )
    setFieldValue('casemanagerId', claim?.caseManager?.managerId, false)
    setFieldValue(
      'externalLossAdjusterId',
      claim?.externalLossAdjuster?.companyId,
      false
    )
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <FormGridField
        component={
          <Info label="Insurance Company" value={claim?.insurer?.companyName} />
        }
      />
      <FormGridField
        component={
          <DateField
            label="Incident Date"
            name="incidentDate"
            required={true}
            maxDate={new Date()}
          />
        }
      />
      <FormGridField
        component={
          <CaseManagerComboBox
            label="Case Manager"
            name="casemanagerId"
            required={true}
            data={optionData}
          />
        }
      />
      <FormGridField
        component={
          <ExternalLossAdjusterComboBox
            label="External Loss Adjusting Firm"
            name="externalLossAdjusterId"
            data={optionData}
          />
        }
      />
    </>
  )
}
export default JobInfoClaimDetailsRow1
