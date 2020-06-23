import React from 'react'
import { usePaginationFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import DocumentView from 'dataComponents/claimActions/DocumentView'
import Table from 'pages/ClaimList/ClaimListTable/Table'
import { LossAdjusterBodyPaginationQuery } from './__generated__/LossAdjusterBodyPaginationQuery.graphql'
import { LossAdjusterBody_data$key } from './__generated__/LossAdjusterBody_data.graphql'

type CommunicationsBody = {
  data: LossAdjusterBody_data$key | null
}
const LossAdjusterBody: React.FC<any> = props => {
  const { data, isLoadingNext } = usePaginationFragment<
    LossAdjusterBodyPaginationQuery,
    LossAdjusterBody_data$key
  >(
    graphql`
      fragment LossAdjusterBody_data on Query
        @refetchable(queryName: "LossAdjusterBodyPaginationQuery")
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 15 }
          cursor: { type: "String", defaultValue: null }
          claimId: { type: "ID!" }
        ) {
        LossAdjusterConnection: claimLossAdjusterDocuments(
          first: $count
          after: $cursor
          where: { claimId: $claimId }
        )
          @connection(
            key: "LossAdjusterBody_data_LossAdjusterConnection"
            filters: ["claimId"]
          ) {
          edges {
            node {
              id
              uploadDate
              company {
                companyName
              }
              reportType {
                reportTypeName
              }
              private
              description
              ...DocumentView_LossAdjusterData
            }
          }
        }
      }
    `,
    props.data
  )

  const tableData = data?.LossAdjusterConnection?.edges?.map((edge: any) => {
    if (!edge?.node) return null
    const node = edge?.node
    return {
      date: node?.uploadDate,
      company: node?.company?.companyName,
      report: node?.reportType,
      file: node,
      privacy: node?.private ? 'Private' : 'Public',
      description: node?.description,
    }
  })
  const tableColumns = [
    { Header: 'Date', accessor: 'date' },
    { Header: 'Company', accessor: 'company' },
    { Header: 'Report', accessor: 'user' },
    {
      Header: 'File',
      accessor: 'file',
      Cell: ({ value }: any) => {
        return <DocumentView LossAdjusterData={value} />
      },
    },
    { Header: 'Privacy', accessor: 'privacy' },
    { Header: 'Description', accessor: 'description', width: 900 },
  ]
  return (
    <Table
      tableData={tableData}
      isLoading={isLoadingNext}
      tableColumns={tableColumns}
    />
  )
}

export default LossAdjusterBody
