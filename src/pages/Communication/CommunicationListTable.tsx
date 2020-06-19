import React from 'react'
import { usePaginationFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { CommunicationListTablePaginationQuery } from './__generated__/CommunicationListTablePaginationQuery.graphql'
import { CommunicationListTable_data$key } from './__generated__/CommunicationListTable_data.graphql'
import CommunicationTable from './CommunicationTable'

type CommunicationListTableProps = {
  data: CommunicationListTable_data$key | null
  where: any
}
const CommunicationListTable: React.FC<CommunicationListTableProps> = props => {
  const {
    data,
    isLoadingNext,
    hasNext,
    loadNext,
    refetch,
  } = usePaginationFragment<
    CommunicationListTablePaginationQuery,
    CommunicationListTable_data$key
  >(
    graphql`
      fragment CommunicationListTable_data on Query
        @refetchable(queryName: "CommunicationListTablePaginationQuery")
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 40 }
          cursor: { type: "String", defaultValue: null }
          where: { type: "CommunicationFilter" }
        ) {
        communicationConnection: claimCommuications(
          first: $count
          after: $cursor
          where: $where
        )
          @connection(
            key: "CommunicationListTable_data_communicationConnection"
            filters: ["where"]
          ) {
          ...CommunicationTable_data
          edges {
            cursor
          }
        }
      }
    `,
    props.data
  )

  const whereString = JSON.stringify(props.where)
  React.useEffect(() => {
    refetch({ where: props.where })
    // eslint-disable-next-line
  }, [whereString, refetch])

  return (
    <CommunicationTable
      data={data?.communicationConnection ?? null}
      isLoadingMore={isLoadingNext}
      hasNext={hasNext}
      loadMore={() => loadNext(30)}
    />
  )
}
export default CommunicationListTable
