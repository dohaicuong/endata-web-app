import React from 'react'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimsPageClaimQuery } from './__generated__/ClaimsPageClaimQuery.graphql'
import ClaimFloatActions from './ClaimFloatActions'
import ClaimListBody from './ClaimListBody'
import ClaimListHeader from './ClaimListHeader'
import { CircularProgress } from '@material-ui/core'
import { Paper } from '@material-ui/core'

const ClaimsPage: React.FC = () => {
  const [filterValues, setFilterValues] = React.useState({})
  const [waterfallStatus, setWaterfallStatus] = React.useState()
  const [portfolio, setPortfolio] = React.useState<any>('Building')
  const filterWhere =
    filterValues &&
    Object.fromEntries(
      Object.entries(filterValues).filter(([key, value]) => value)
    )
  const where = {
    ...filterWhere,
    claimStatusStageIds: waterfallStatus,
  }
  const data = useLazyLoadQuery<ClaimsPageClaimQuery>(
    graphql`
      query ClaimsPageClaimQuery(
        $where: ClaimJobFilter
        $count: Int!
        $cursor: String!
        $waterfallWhere: ClaimStatusVolumeWhere!
      ) {
        ...ClaimListBody_claims
        ...ClaimListHeader_filters
        ...ClaimListHeaderWaterfall_WaterfallFilters
        currentUser {
          userType
        }
      }
    `,
    {
      count: 30,
      cursor: '',
      where: null,
      waterfallWhere: { claimPortfolioType: 'Building' },
    },
    {
      fetchPolicy: 'store-and-network',
    }
  )
  return (
    <>
      <React.Suspense
        fallback={
          <Paper
            style={{ padding: 16, display: 'flex', justifyContent: 'center' }}
          >
            {' '}
            <CircularProgress />{' '}
          </Paper>
        }
      >
        <ClaimListHeader
          filters={data}
          WaterfallFilters={data}
          setFilterValues={setFilterValues}
          waterfallStatus={waterfallStatus}
          setWaterfallStatus={setWaterfallStatus}
          portfolio={portfolio}
          setPortfolio={setPortfolio}
        />
      </React.Suspense>
      <React.Suspense
        fallback={
          <CircularProgress
            style={{ position: 'absolute', top: '50%', left: '50%' }}
          />
        }
      >
        <ClaimListBody
          where={where}
          claims={data}
          currentUser={data.currentUser}
          loading={false}
        />
      </React.Suspense>
      <ClaimFloatActions />
    </>
  )
}
export default ClaimsPage
