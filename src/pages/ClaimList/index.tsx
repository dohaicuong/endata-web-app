import React from 'react'
import { Container } from '@material-ui/core'
import ClaimListFilter from './ClaimListFilter'
import ClaimListTable from './ClaimListTable'

import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimListQuery } from './__generated__/ClaimListQuery.graphql'

const ClaimList = () => {
  const [where, setWhere] = React.useState<any>({})

  const data = useLazyLoadQuery<ClaimListQuery>(
    graphql`
      query ClaimListQuery {
        ...ClaimListFilter_filters
        ...ClaimListTable_data
      }
    `,
    {}
  )

  return (
    <>
      <React.Suspense fallback="Filter loading...">
        <ClaimListFilter
          filters={data}
          // waterfallFilters={data}
          where={where}
          setWhere={setWhere}
        />
      </React.Suspense>
      <Container
        maxWidth="xl"
        // 100vh - navbarHeight - filterHeight - totalRowHeight - top/bottom margin
        style={{
          height: 'calc(100vh - 48px - 120px - 28px - 16px)',
          marginTop: 8,
        }}
      >
        <React.Suspense fallback="Table loading...">
          <ClaimListTable data={data} where={where} />
        </React.Suspense>
      </Container>
    </>
  )
}
export default ClaimList
