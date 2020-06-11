import React from 'react'

import renderField from 'pages/ClaimAdd/AddClaim/cards/renderField'
import Info from 'components/Info'
import DateField from 'components/Formik/DateField'
import CaseManager from 'pages/ClaimAdd/AddClaim/cards/ClaimDetailsCard/CaseManager'
import ExternalLossFirm from 'pages/ClaimAdd/AddClaim/cards/ClaimDetailsCard/ExternalLossFirm'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoClaimDetailsRow1_claim$key } from './__generated__/JobInfoClaimDetailsRow1_claim.graphql'
import { JobInfoClaimDetailsRow1_optionData$key } from './__generated__/JobInfoClaimDetailsRow1_optionData.graphql'

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
        ...CaseManager_options
        ...ExternalLossFirm_options @arguments(companyId: $companyId)
      }
    `,
    props.optionData
  )

  return (
    <>
      {renderField({
        component: Info,
        label: 'Insurance Company',
        value: claim?.insurer?.companyName,
      })}
      {renderField({
        component: DateField,
        label: 'Incident Date',
        name: 'incidentDate',
        required: true,
        maxDate: new Date(),
        defaultValue: claim?.incidentDetail?.incidentDate,
      })}
      <CaseManager
        options={optionData}
        defaultValue={claim?.caseManager?.managerId}
      />
      <ExternalLossFirm
        options={optionData}
        defaultValue={claim?.externalLossAdjuster?.companyId}
      />
    </>
  )
}
export default JobInfoClaimDetailsRow1
