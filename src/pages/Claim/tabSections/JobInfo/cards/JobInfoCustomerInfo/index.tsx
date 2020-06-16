import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoCustomerInfo_claim$key } from './__generated__/JobInfoCustomerInfo_claim.graphql'

import Card, { CardProps } from 'components/Card'
import { Grid } from '@material-ui/core'
import JobInfoCustomerInfoRow1 from './JobInfoCustomerInfoRow1'
import JobInfoCustomerInfoRow2 from './JobInfoCustomerInfoRow2'
import JobInfoCustomerInfoRow3 from './JobInfoCustomerInfoRow3'
import JobInfoCustomerInfoRow4 from './JobInfoCustomerInfoRow4'
import JobInfoCustomerInfoRow5 from './JobInfoCustomerInfoRow5'

type JobInfoCustomerInfoProps = CardProps & {
  claim: JobInfoCustomerInfo_claim$key | null
}
const JobInfoCustomerInfo: React.FC<JobInfoCustomerInfoProps> = props => {
  const claim = useFragment(
    graphql`
      fragment JobInfoCustomerInfo_claim on ClaimJob {
        ...JobInfoCustomerInfoRow1_claim
        ...JobInfoCustomerInfoRow2_claim
        ...JobInfoCustomerInfoRow3_claim
        ...JobInfoCustomerInfoRow4_claim
        ...JobInfoCustomerInfoRow5_claim
      }
    `,
    props.claim
  )

  return (
    <Card title="Customer & Property Information" {...props}>
      <Grid container spacing={3}>
        <JobInfoCustomerInfoRow1 claim={claim} />
        <JobInfoCustomerInfoRow2 claim={claim} />
        <JobInfoCustomerInfoRow3 claim={claim} />
        <JobInfoCustomerInfoRow4 claim={claim} />
        <JobInfoCustomerInfoRow5 claim={claim} />
      </Grid>
    </Card>
  )
}
export default JobInfoCustomerInfo
