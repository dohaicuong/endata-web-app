import React from 'react'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { LossAdjusterQuery } from './__generated__/LossAdjusterQuery.graphql'
import LossAdjusterBody from './LossAdjusterBody'
import LossAdjusterActions from './LossAdjusterActions'
import { Grid } from '@material-ui/core'

const LossAdjuster = ({ claimId }: any) => {
  const data = useLazyLoadQuery<LossAdjusterQuery>(
    graphql`
      query LossAdjusterQuery($claimId: ID!) {
        ...LossAdjusterBody_data @arguments(claimId: $claimId)
      }
    `,
    { claimId }
  )

  return (
    <>
      <LossAdjusterActions />
      <Grid container style={{ marginTop: 8 }}>
        <Grid item xs>
          <React.Suspense fallback="Loading...">
            <LossAdjusterBody data={data} />
          </React.Suspense>
        </Grid>
      </Grid>
    </>
  )
}
export default LossAdjuster
