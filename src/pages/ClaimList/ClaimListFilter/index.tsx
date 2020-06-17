import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import PortfolioFilter from 'components/PortfolioFilter/PortfolioFilter'
import { CircularProgress } from '@material-ui/core'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimListFilter_filters$key } from './__generated__/ClaimListFilter_filters.graphql'

import FilterGroup from 'components/FilterGroup'
import WaterfallView from './WaterfallView'

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
        ...WaterfallView_waterfallFilters
      }
    `,
    props.filters
  )
  const claimFilters = filters.currentUser?.claimFilters?.map(props => {
    const [type, multiple]: any = props?.type?.split('_')
    return {
      ...props,
      type,
      multiple: multiple ? true : false,
    }
  })

  return (
    <Paper style={{ padding: 16 }}>
      <FilterGroup
        firstRowFilters={6}
        filters={claimFilters}
        onChange={values => {
          const cleanedValues = Object.fromEntries(
            Object.entries(values).filter(([, value]) => value)
          )
          props.setWhere({
            ...cleanedValues,
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
    </Paper>
  )
}
export default ClaimListFilter
