import React from 'react'
import { usePaginationFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'

import { ClaimListPaginationQuery } from './__generated__/ClaimListPaginationQuery.graphql'
import { ClaimList_claims$key } from './__generated__/ClaimList_claims.graphql'
import { Link } from 'react-router-dom'

type ClaimList = {
  claims: ClaimList_claims$key | null
}
const ClaimList: React.FC<ClaimList> = props => {
  const { data, loadNext } = usePaginationFragment<
    ClaimListPaginationQuery,
    ClaimList_claims$key
  >(
    graphql`
      fragment ClaimList_claims on Query
        @refetchable(queryName: "ClaimListPaginationQuery") {
        claimJobs(first: $count, after: $cursor, where: $where)
          @connection(key: "ClaimList_query_claimJobs") {
          edges {
            node {
              id
              insurer {
                companyName
              }
            }
          }
        }
      }
    `,
    props.claims
  )

  console.log(data)

  return (
    <>
      ClaimList
      <button onClick={() => loadNext(5)}>next</button>
      {data?.claimJobs?.edges?.map(edge => (
        <p key={edge?.node?.id}>
          {edge?.node?.insurer?.companyName}: <Link to={`/claim/${edge?.node?.id}`}>{edge?.node?.id}</Link>
        </p>
      ))}
    </>
  )
}
export default ClaimList
