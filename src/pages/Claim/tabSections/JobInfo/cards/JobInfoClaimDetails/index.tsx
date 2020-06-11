import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoClaimDetails_claim$key } from './__generated__/JobInfoClaimDetails_claim.graphql'
import { JobInfoClaimDetails_optionData$key } from './__generated__/JobInfoClaimDetails_optionData.graphql'

import Card from 'components/Card'

import { Grid } from '@material-ui/core'

import JobInfoClaimDetailsRow1 from './JobInfoClaimDetailsRow1'
import JobInfoClaimDetailsRow2 from './JobInfoClaimDetailsRow2'
import JobInfoClaimDetailsRow3 from './JobInfoClaimDetailsRow3'

type JobInfoClaimDetailsProps = {
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
      }
    `,
    props.claim
  )

  const optionData = useFragment(
    graphql`
      fragment JobInfoClaimDetails_optionData on Query {
        ...JobInfoClaimDetailsRow1_optionData
        ...JobInfoClaimDetailsRow2_meta
      }
    `,
    props.optionData
  )

  return (
    <Card title="Claim Details">
      <Grid container spacing={3}>
        <JobInfoClaimDetailsRow1
          claim={claim as any}
          optionData={optionData as any}
        />
        <JobInfoClaimDetailsRow2
          claim={claim as any}
          meta={optionData as any}
        />
        <JobInfoClaimDetailsRow3 claim={claim as any} />
      </Grid>
    </Card>
  )
}
export default JobInfoClaimDetails
