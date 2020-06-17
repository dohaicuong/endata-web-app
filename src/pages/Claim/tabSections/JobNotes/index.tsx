import React from 'react'
import JobNotesBody from './JobNotesBody'

import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobNotesQuery } from './__generated__/JobNotesQuery.graphql'
import PortfolioFilter from 'components/PortfolioFilter/PortfolioFilter'
import { PortfolioType } from './JobNotesBody/__generated__/JobNotesBodyPaginationQuery.graphql'
import { Grid } from '@material-ui/core'

const JobNotes = ({ claimId }: any) => {
  const data = useLazyLoadQuery<JobNotesQuery>(
    graphql`
      query JobNotesQuery($claimId: ID!) {
        ...JobNotesBody_data @arguments(claimId: $claimId)
      }
    `,
    { claimId }
  )

  const [portfolio, setPortfolio] = React.useState<PortfolioType | undefined>()
  const portfolios: PortfolioType[] = ['Building', 'Contents', 'Restoration']

  return (
    <>
      <div>Job Notes Actions</div>
      <Grid container>
        <Grid item>
          <PortfolioFilter
            isSelectAll
            portfolios={portfolios}
            value={portfolio}
            setValue={setPortfolio}
          />
        </Grid>
        <Grid item xs>
          <React.Suspense fallback="Loading...">
            <JobNotesBody data={data} portfolio={portfolio} />
          </React.Suspense>
        </Grid>
      </Grid>
    </>
  )
}
export default JobNotes
