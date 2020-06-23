import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay/hooks'
import {
  DocumentsBodyPaginationQuery,
  PortfolioType,
} from './__generated__/DocumentsBodyPaginationQuery.graphql'
import { DocumentsBody_data$key } from './__generated__/DocumentsBody_data.graphql'
import Table from 'pages/ClaimList/ClaimListTable/Table'
import DocumentView from 'dataComponents/claimActions/DocumentView'
import DocumentDelete from 'dataComponents/claimActions/DocumentDelete'

type DocumentsBodyProps = {
  data: DocumentsBody_data$key | null
  portfolio?: PortfolioType
}
const DocumentsBody: React.FC<DocumentsBodyProps> = props => {
  const { data, refetch, isLoadingNext } = usePaginationFragment<
    DocumentsBodyPaginationQuery,
    DocumentsBody_data$key
  >(
    graphql`
      fragment DocumentsBody_data on Query
        @refetchable(queryName: "DocumentsBodyPaginationQuery")
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 500 }
          cursor: { type: "String", defaultValue: null }
          claimId: { type: "ID!" }
          portfolios: { type: "[PortfolioType]", defaultValue: null }
        ) {
        documentConnection: claimDocuments(
          first: $count
          after: $cursor
          where: { claimId: $claimId, portfolios: $portfolios }
        )
          @connection(
            key: "DocumentsBody_data_documentConnection"
            filters: ["claimId", "portfolios"]
          ) {
          edges {
            node {
              portfolioType
              uploadDate
              company {
                companyName
              }
              private
              description
              amountInvoice

              ...DocumentView_claimDocumentsData
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

  const tableData = data?.documentConnection?.edges
    ?.map(edge => {
      if (!edge?.node) return null

      const node = edge.node
      return {
        portfolioDate: {
          portfolio: node.portfolioType,
          date: node.uploadDate,
        },
        company: node.company?.companyName,
        privacy: node.private ? 'Private' : 'Public',
        description: node.description,
        amount: node.amountInvoice,

        viewActionData: node,
        actionData: node,
      }
    })
    .filter(node => node)

  const tableColumns = [
    { Header: 'Date', accessor: 'portfolioDate.date' },
    { Header: 'Company', accessor: 'company' },
    {
      Header: 'File',
      accessor: 'viewActionData',
      Cell: ({ value }: any) => {
        return <DocumentView claimDocumentsData={value} />
      },
    },
    { Header: 'Privacy', accessor: 'privacy' },
    { Header: 'Description', accessor: 'description' },
    { Header: 'Amount', accessor: 'amount' },
    {
      Header: 'Actions',
      accessor: 'actionData',
      Cell: ({ value }: any) => <DocumentDelete data={value} />,
    },
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
export default DocumentsBody
