import React from 'react'
import { Grid } from '@material-ui/core'
import PortfolioFilter from 'components/PortfolioFilter/PortfolioFilter'
import { CircularProgress } from '@material-ui/core'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimListFilter_filters$key } from './__generated__/ClaimListFilter_filters.graphql'

import WaterfallView from './WaterfallView'
import FilterInputGroup from 'dataComponents/FilterInputGroup'

type ClaimListFilterProps = {
  filters: ClaimListFilter_filters$key

  where: any
  setWhere: (where: any) => void
}
const ClaimListFilter: React.FC<ClaimListFilterProps> = props => {
  const [waterfallStatus, setWaterfallStatus] = React.useState()
  const [portfolio, setPortfolio] = React.useState<any>('Building')
  const portfolios: any[] = ['Building', 'Contents', 'Restoration']

  const filters = useFragment(
    graphql`
      fragment ClaimListFilter_filters on Query {
        currentUser {
          claimFilters {
            ...FilterInput_data
          }
        }
        ...WaterfallView_waterfallFilters
      }
    `,
    props.filters
  )

  return (
    <FilterInputGroup
      filters={filters.currentUser?.claimFilters}
      onChange={values => {
        props.setWhere({
          ...values,
          claimStatusStageIds: waterfallStatus,
        })
      }}
      onViewChange={isSubview => {
        if (isSubview) {
          const {
            claimStatusStageIds, // eslint-disable-line @typescript-eslint/no-unused-vars
            ...where
          } = props.where
          props.setWhere(where)
        } else {
          props.setWhere((pre: any) => ({
            ...pre,
            claimStatusStageIds: waterfallStatus,
          }))
        }
      }}
      subview={
        <Grid container spacing={1}>
          <Grid item>
            <PortfolioFilter
              portfolios={portfolios}
              value={portfolio}
              setValue={setPortfolio}
            />
          </Grid>

          <Grid item xs>
            <React.Suspense
              fallback={
                <CircularProgress
                  style={{ position: 'absolute', top: '10%', left: '50%' }}
                />
              }
            >
              <WaterfallView
                waterfallFilters={filters}
                waterfallStatus={waterfallStatus}
                setWaterfallStatus={setWaterfallStatus}
                where={props.where}
                setWhere={props.setWhere}
                portfolio={portfolio}
              />
            </React.Suspense>
          </Grid>
        </Grid>
      }
    />
  )
}
export default ClaimListFilter
