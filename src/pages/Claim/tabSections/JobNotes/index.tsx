import React from 'react'
import JobNotesBody from './JobNotesBody'

import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobNotesQuery } from './__generated__/JobNotesQuery.graphql'
import PortfolioFilter from 'components/PortfolioFilter/PortfolioFilter'
import { PortfolioType } from './JobNotesBody/__generated__/JobNotesBodyPaginationQuery.graphql'
import { Grid } from '@material-ui/core'
import JobNotesActions from './JobNotesActions'

const JobNotes = ({ claimId }: any) => {
  const data = useLazyLoadQuery<JobNotesQuery>(
    graphql`
      query JobNotesQuery($claimId: ID!) {
        claimJob(where: { id: $claimId }) {
          view {
            actions {
              ...JobNotesActions_actions
            }
          }
        }
        ...JobNotesBody_data @arguments(claimId: $claimId)
        ...JobNotesActions_data
      }
    `,
    { claimId }
  )

  const [portfolio, setPortfolio] = React.useState<PortfolioType | undefined>()
  const portfolios: PortfolioType[] = ['Building', 'Contents', 'Restoration']

  return (
    <>
      <JobNotesActions
        actions={data.claimJob?.view?.actions ?? null}
        data={data}
      />
      <Grid container style={{ marginTop: 8 }}>
        <Grid item>
          <PortfolioFilter
            isSelectAll
            portfolios={portfolios}
            value={portfolio}
            setValue={setPortfolio}
          />
        </Grid>
        <Grid
          item
          xs
          style={{
            height:
              // 100vh - navBarHeight - infoCardHeight - margin - tabHeight - margin - actionBarHeight - margin - bottomMargin
              'calc(100vh - 48px - 182px - 8px - 48px - 8px - 58px - 8px - 8px)',
          }}
        >
          <React.Suspense fallback="Loading...">
            <JobNotesBody data={data} portfolio={portfolio} />
          </React.Suspense>
        </Grid>
      </Grid>
    </>
  )
}
export default JobNotes
