import React from 'react'
import { usePaginationFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import Table from 'pages/ClaimList/ClaimListTable/Table'
import { moneyFormats } from 'hooks/useMoneyFormat'
import {
  VariationsBodyPaginationQuery,
  PortfolioType,
} from './__generated__/VariationsBodyPaginationQuery.graphql'
import { VariationsBody_data$key } from './__generated__/VariationsBody_data.graphql'

type VariationsBody = {
  portfolio?: PortfolioType
  data: VariationsBody_data$key | null
}
const VariationsBody: React.FC<VariationsBody> = props => {
  const { data, refetch, isLoadingNext } = usePaginationFragment<
    VariationsBodyPaginationQuery,
    VariationsBody_data$key
  >(
    graphql`
      fragment VariationsBody_data on Query
        @refetchable(queryName: "VariationsBodyPaginationQuery")
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 15 }
          cursor: { type: "String", defaultValue: null }
          claimId: { type: "ID!" }
          portfolios: { type: "[PortfolioType]", defaultValue: null }
        ) {
        VariationsConnection: jobVariations(
          first: $count
          after: $cursor
          where: { claimId: $claimId, portfolios: $portfolios }
        )
          @connection(
            key: "VariationsBody_data_VariationsConnection"
            filters: ["claimId", "portfolios"]
          ) {
          edges {
            node {
              variationId
              logdate
              variationTitle
              variationDescription
              variationReason {
                reasonDescription
              }
              total
              variationStatus
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

  const tableData = data?.VariationsConnection?.edges?.map((edge: any) => {
    const node = edge?.node
    return {
      date: node?.logdate,
      name: `${node?.variationTitle} - ${node?.variationDescription}`,
      reason: node?.variationReason && node?.variationReason.reasonDescription,
      cost: `${moneyFormats(node?.total)}`,
      status: node?.variationStatus,
    }
  })
  const tableColumns = [
    { Header: 'Date', accessor: 'date' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Reason', accessor: 'reason' },
    { Header: 'Cost', accessor: 'cost' },
    { Header: 'Status', accessor: 'status' },
  ]
  return (
    <Table
      tableData={tableData}
      isLoading={isLoadingNext}
      tableColumns={tableColumns}
    />
  )
}

export default VariationsBody
