import React from 'react'

import WaterfallFilter from 'components/WaterfallFilter'

import { useRefetchableFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'

type WaterfallViewProps = {
  waterfallFilters: any
  waterfallStatus: any
  setWaterfallStatus: any
  where: any
  setWhere: any
  portfolio: any
}
const WaterfallView: React.FC<WaterfallViewProps> = props => {
  const { portfolio } = props

  const [{ currentUser: waterfallFilters }, refetch] = useRefetchableFragment(
    graphql`
      fragment WaterfallView_waterfallFilters on Query
        @refetchable(queryName: "WaterfallFiltersRefetchQuery")
        @argumentDefinitions(
          waterfallWhere: {
            type: "ClaimStatusVolumeWhere"
            defaultValue: { claimPortfolioType: Building }
          }
        ) {
        currentUser {
          waterfallFilters(where: $waterfallWhere) {
            id
            items {
              value: id
              label
              claimCount
              color
            }
          }
        }
      }
    `,
    props.waterfallFilters
  )
  // refetch waterfall filter when portfolio changed
  React.useEffect(() => {
    refetch(
      { waterfallWhere: { claimPortfolioType: portfolio } },
      { fetchPolicy: 'store-or-network' }
    )
  }, [portfolio, refetch])

  // refetch waterfall filter when where filter changed
  const whereString = JSON.stringify(props.where)
  const getWaterfallWhere = (where: any) => {
    ['status', 'portfolios', 'suppliers'].forEach(e => {
      Object.keys(where).indexOf(e) !== -1 && delete where[e]
    })
    return where
  }
  React.useEffect(() => {
    const {
      claimStatusStageIds, // eslint-disable-line @typescript-eslint/no-unused-vars
      ...where
    } = props.where
    refetch(
      {
        waterfallWhere: {
          ...getWaterfallWhere(where),
          claimPortfolioType: portfolio,
        },
      },
      { fetchPolicy: 'store-and-network' }
    )
    // eslint-disable-next-line
  }, [portfolio, whereString, refetch])

  return (
    <WaterfallFilter
      groups={waterfallFilters?.waterfallFilters}
      value={props.waterfallStatus}
      setValue={values => {
        props.setWaterfallStatus(values)
        props.setWhere((pre: any) => ({
          ...pre,
          claimStatusStageIds: values,
        }))
      }}
    />
  )
}
export default WaterfallView
