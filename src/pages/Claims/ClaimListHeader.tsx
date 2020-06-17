import React from 'react'
import { useFragment, useRefetchableFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import FilterGroup from 'components/FilterGroup'
import { Grid, Paper } from '@material-ui/core'
import PortfolioFilter from 'components/PortfolioFilter/PortfolioFilter'
import { ClaimListHeaderWaterfallRefetchQuery } from './__generated__/ClaimListHeaderWaterfallRefetchQuery.graphql'
import WaterfallFilter from 'components/WaterfallFilter'
import { ClaimListHeader_filters$key } from './__generated__/ClaimListHeader_filters.graphql'
import { ClaimListHeaderWaterfall_WaterfallFilters$key } from './__generated__/ClaimListHeaderWaterfall_WaterfallFilters.graphql'
import { PortfolioType } from 'pages/ClaimList/ClaimListTable/__generated__/ClaimListTablePaginationQuery.graphql'

type ClaimListHeaderProps = {
  setFilterValues: (values: any) => void
  waterfallStatus: any
  setWaterfallStatus: (value: any) => void
  portfolio: any
  setPortfolio: (value: any) => void

  filters: ClaimListHeader_filters$key | null
  WaterfallFilters: ClaimListHeaderWaterfall_WaterfallFilters$key | null
}

const ClaimListHeader: React.FC<ClaimListHeaderProps> = ({
  setFilterValues,
  waterfallStatus,
  setWaterfallStatus,
  portfolio,
  setPortfolio,
  ...props
}) => {
  const data = useFragment(
    graphql`
      fragment ClaimListHeader_filters on Query {
        currentUser {
          claimFilters {
            id
            type
            label
            name
            options {
              group
              label
              value: id
            }
          }
        }
      }
    `,
    props.filters
  )
  const [waterfallData, refetch] = useRefetchableFragment<
    ClaimListHeaderWaterfallRefetchQuery,
    ClaimListHeaderWaterfall_WaterfallFilters$key
  >(
    graphql`
      fragment ClaimListHeaderWaterfall_WaterfallFilters on Query
        @refetchable(queryName: "ClaimListHeaderWaterfallRefetchQuery") {
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
    props.WaterfallFilters
  )

  React.useMemo(() => {
    refetch(
      { waterfallWhere: { claimPortfolioType: portfolio } },
      { fetchPolicy: 'store-or-network' }
    )
  }, [portfolio, refetch])
  const claimFilters = data?.currentUser?.claimFilters
  const filters = React.useMemo(
    () =>
      claimFilters?.map(props => {
        const [type, multiple]: any = props?.type?.split('_')
        return {
          ...props,
          type,
          multiple: multiple ? true : false,
        }
        // TODO
      }),
    [claimFilters]
  )

  const portfolios: PortfolioType[] = ['Building', 'Contents', 'Restoration']
  const waterfallFilters = waterfallData?.currentUser?.waterfallFilters
  return (
    <Paper style={{ padding: 16 }}>
      <FilterGroup
        firstRowFilters={6}
        filters={filters}
        onChange={values => {
          setFilterValues(values)
        }}
        filterRender={(Filter, props, index) => {
          return (
            <Grid key={index} item xs={2}>
              <Filter {...props} fullWidth variant="outlined" />
            </Grid>
          )
        }}
        SubView={
          <Grid container spacing={1}>
            <Grid item>
              <PortfolioFilter
                portfolios={portfolios}
                value={portfolio}
                setValue={setPortfolio}
              />
            </Grid>

            <Grid item xs>
              <WaterfallFilter
                groups={waterfallFilters}
                value={waterfallStatus}
                setValue={setWaterfallStatus}
              />
            </Grid>
          </Grid>
        }
      />
    </Paper>
  )
}

export default ClaimListHeader
