import React from 'react'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { VariationsQuery } from './__generated__/VariationsQuery.graphql'
import PortfolioFilter from 'components/PortfolioFilter/PortfolioFilter'
import VariationsBody from './VariationsBody/'
import VariationsActions from './VariationsActions'
import { PortfolioType } from './VariationsBody/__generated__/VariationsBodyPaginationQuery.graphql'
import { Grid } from '@material-ui/core'

const Variations = ({ claimId }: any) => {
  const data = useLazyLoadQuery<VariationsQuery>(
    graphql`
      query VariationsQuery($claimId: ID!) {
        ...VariationsBody_data @arguments(claimId: $claimId)
      }
    `,
    { claimId }
  )

  const [portfolio, setPortfolio] = React.useState<PortfolioType | undefined>()
  const portfolios: PortfolioType[] = ['Building', 'Contents', 'Restoration']

  return (
    <>
      <VariationsActions />
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
            <VariationsBody data={data} portfolio={portfolio} />
          </React.Suspense>
        </Grid>
      </Grid>
    </>
  )
}
export default Variations
