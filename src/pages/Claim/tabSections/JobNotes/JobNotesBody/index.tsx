import React from 'react'

import { graphql } from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay/hooks'
import {
  JobNotesBodyPaginationQuery,
  PortfolioType,
} from './__generated__/JobNotesBodyPaginationQuery.graphql'
import { JobNotesBody_data$key } from './__generated__/JobNotesBody_data.graphql'

import Table from 'pages/ClaimList/ClaimListTable/Table'

type JobNotesBody = {
  portfolio?: PortfolioType
  data: JobNotesBody_data$key | null
}
const JobNotesBody: React.FC<JobNotesBody> = props => {
  const { data, refetch, isLoadingNext } = usePaginationFragment<
    JobNotesBodyPaginationQuery,
    JobNotesBody_data$key
  >(
    graphql`
      fragment JobNotesBody_data on Query
        @refetchable(queryName: "JobNotesBodyPaginationQuery")
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 500 }
          cursor: { type: "String", defaultValue: null }
          claimId: { type: "ID!" }
          portfolios: { type: "[PortfolioType]", defaultValue: null }
        ) {
        jobNoteConnection: claimNotes(
          first: $count
          after: $cursor
          where: { claimId: $claimId, portfolios: $portfolios }
        )
          @connection(
            key: "JobNotesBody_data_jobNoteConnection"
            filters: ["claimId", "portfolios"]
          ) {
          edges {
            node {
              id
              portfolioType
              logDate
              user {
                company {
                  companyName
                }
                userName
              }
              private
              message
            }
          }
        }
      }
    `,
    props.data
  )
  const selectedPortfolio = props.portfolio || null
  React.useEffect(() => {
    if (selectedPortfolio) refetch({ portfolios: [selectedPortfolio] })
    else refetch({ portfolios: ['Building', 'Contents', 'Restoration'] })
  }, [selectedPortfolio, refetch])

  const tableData = data?.jobNoteConnection?.edges?.map(edge => {
    const note = edge?.node
    return {
      portfolioDate: {
        portfolio: note?.portfolioType,
        date: note?.logDate,
      },
      company: note?.user?.company?.companyName,
      user: note?.user?.userName,
      privacy: note?.private === 1 ? 'Private' : 'Public',
      note: note?.message,
    }
  })

  const tableColumns = [
    { Header: 'Date', accessor: 'portfolioDate.date' },
    { Header: 'Company', accessor: 'company' },
    { Header: 'User', accessor: 'user' },
    { Header: 'Privacy', accessor: 'privacy' },
    { Header: 'Note', accessor: 'note' },
  ]

  return (
    <Table
      isLoading={isLoadingNext}
      tableColumns={tableColumns}
      tableData={tableData}
      // onScroll={onScroll}
    />
  )
}
export default JobNotesBody
