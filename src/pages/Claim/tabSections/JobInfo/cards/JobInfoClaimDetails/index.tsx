import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoClaimDetails_claim$key } from './__generated__/JobInfoClaimDetails_claim.graphql'
import { JobInfoClaimDetails_optionData$key } from './__generated__/JobInfoClaimDetails_optionData.graphql'

import Card, { CardProps } from 'components/Card'
import { Grid } from '@material-ui/core'
import JobInfoClaimDetailsRow1 from './JobInfoClaimDetailsRow1'
import JobInfoClaimDetailsRow2 from './JobInfoClaimDetailsRow2'
import JobInfoClaimDetailsRow3 from './JobInfoClaimDetailsRow3'
import JobInfoClaimDetailsRow4 from './JobInfoClaimDetailsRow4'
import JobInfoClaimDetailsRow5 from './JobInfoClaimDetailsRow5'
import JobInfoClaimDetailsRow6 from './JobInfoClaimDetailsRow6'

type JobInfoClaimDetailsProps = CardProps & {
  claim: JobInfoClaimDetails_claim$key | null
  optionData: JobInfoClaimDetails_optionData$key | null
}
const JobInfoClaimDetails: React.FC<JobInfoClaimDetailsProps> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoClaimDetails_claim on ClaimJob {
        ...JobInfoClaimDetailsRow1_claim
        ...JobInfoClaimDetailsRow2_claim
        ...JobInfoClaimDetailsRow3_claim
        ...JobInfoClaimDetailsRow4_claim
        ...JobInfoClaimDetailsRow5_claim
        ...JobInfoClaimDetailsRow6_claim
      }
    `,
    props.claim
  )

  const optionData = useFragment(
    graphql`
      fragment JobInfoClaimDetails_optionData on Query {
        ...JobInfoClaimDetailsRow1_optionData
        ...JobInfoClaimDetailsRow2_meta
        ...JobInfoClaimDetailsRow4_optionData
        ...JobInfoClaimDetailsRow5_optionData
        ...JobInfoClaimDetailsRow6_optionData
      }
    `,
    props.optionData
  )

  return (
    <Card title="Claim Details" {...props}>
      <Grid container spacing={3}>
        <JobInfoClaimDetailsRow1 claim={claim} optionData={optionData} />
        <JobInfoClaimDetailsRow2 claim={claim} meta={optionData} />
        <JobInfoClaimDetailsRow3 claim={claim} />
        <JobInfoClaimDetailsRow4 claim={claim} optionData={optionData} />
        <JobInfoClaimDetailsRow5 claim={claim} optionData={optionData} />
        <JobInfoClaimDetailsRow6 claim={claim} optionData={optionData} />
      </Grid>
    </Card>
  )
}
export default JobInfoClaimDetails
