import React from 'react'
import { Container } from '@material-ui/core'
import ClaimListFilter from './ClaimListFilter'
import ClaimListTable from './ClaimListTable'

import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimListQuery } from './__generated__/ClaimListQuery.graphql'

const ClaimList = () => {
  const data = useLazyLoadQuery<ClaimListQuery>(
    graphql`
      query ClaimListQuery {
        ...ClaimListTable_data
      }
    `,
    {}
  )

  return (
    <>
      <React.Suspense fallback="Filter loading...">
        <ClaimListFilter />
      </React.Suspense>
      <Container
        maxWidth="xl"
        style={{ height: 'calc(100vh - 68px - 16px)', marginTop: 8 }}
      >
        <ClaimListTable data={data} />
      </Container>
    </>
  )
}
export default ClaimList
