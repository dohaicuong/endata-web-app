import React from 'react'

import ClaimsTable from './ClaimsTable'

import { graphql } from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay/hooks'
import { ClaimListTablePaginationQuery } from './__generated__/ClaimListTablePaginationQuery.graphql'
import { ClaimListTable_data$key } from './__generated__/ClaimListTable_data.graphql'

type ClaimListTableProps = {
  data: ClaimListTable_data$key | null
}
const ClaimListTable: React.FC<ClaimListTableProps> = props => {
  // refetch
  const { data, isLoadingNext, loadNext } = usePaginationFragment<
    ClaimListTablePaginationQuery,
    ClaimListTable_data$key
  >(
    graphql`
      fragment ClaimListTable_data on Query
      @refetchable(queryName: "ClaimListTablePaginationQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 30 }
        cursor: { type: "String", defaultValue: null }
        where: { type: "ClaimJobFilter" }
      )
      {
        currentUser { 
          ...ClaimsTable_user
        }
        claimConnection: claimJobs(
          first: $count,
          after: $cursor,
          where: $where
        )
        @connection(key: "ClaimListTable_data_claimConnection", filters: ["where"])
        {
          ...ClaimsTable_claims
          edges { cursor }
        }
      }
    `,
    props.data
  )

  return (
    <ClaimsTable
      user={data?.currentUser ?? null}
      claims={data?.claimConnection ?? null}
      
      isLoadingMore={isLoadingNext}
      loadMore={() => loadNext(20)}
    />
  )
}
export default ClaimListTable
