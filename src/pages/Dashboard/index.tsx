import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { DashboardPageQuery } from './__generated__/DashboardPageQuery.graphql'

import { ErrorBoundary } from 'react-error-boundary'
import FilterInputGroup from 'dataComponents/FilterInputGroup'

const DashboardPage: React.FC = () => {
  // const [value, setValue] = React.useState({})

  const data = useLazyLoadQuery<DashboardPageQuery>(
    graphql`
      query DashboardPageQuery {
        currentUser {
          dashboardFilters {
            id
            ...FilterInput_data
          }
        }
      }
    `,
    {}
  )

  return (
    <ErrorBoundary fallback={<>Dashboard Error</>}>
      <React.Suspense fallback="Filter loading...">
        <FilterInputGroup
          filters={data.currentUser?.dashboardFilters}
          onChange={values => console.log(values)}
        />
        {/* <TableFilter data={data} value={value} setValue={setValue} /> */}
      </React.Suspense>
      <React.Suspense fallback="KPI loading...">
        {/* <KPITable data={data} /> */}
      </React.Suspense>
      <React.Suspense fallback="Widgets loading...">
        {/* <Widgets data={data} /> */}
      </React.Suspense>
    </ErrorBoundary>
  )
}
export default DashboardPage
