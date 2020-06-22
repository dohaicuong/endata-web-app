import React from 'react'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { CommunicationsQuery } from './__generated__/CommunicationsQuery.graphql'
import PortfolioFilter from 'components/PortfolioFilter/PortfolioFilter'
import CommunicationsBody from './CommunicationsBody/'
import CommunicationsActions from './CommunicationsActions'
import { PortfolioType } from './CommunicationsBody/__generated__/CommunicationsBodyPaginationQuery.graphql'
import { Grid } from '@material-ui/core'

const Communications = ({ claimId }: any) => {
  const data = useLazyLoadQuery<CommunicationsQuery>(
    graphql`
      query CommunicationsQuery($claimId: ID!) {
        ...CommunicationsBody_data @arguments(claimId: $claimId)
        ...CommunicationsActions_data
      }
    `,
    { claimId }
  )

  const [portfolio, setPortfolio] = React.useState<PortfolioType | undefined>()
  const portfolios: PortfolioType[] = ['Building', 'Contents', 'Restoration']

  return (
    <>
      <CommunicationsActions data={data} />
      <Grid container style={{ marginTop: 8 }}>
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
            <CommunicationsBody data={data} portfolio={portfolio} />
          </React.Suspense>
        </Grid>
      </Grid>
    </>
  )
}
export default Communications
