import React from 'react'
import { usePaginationFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import Table from 'pages/ClaimList/ClaimListTable/Table'
import CommunicationAcknowledge from 'dataComponents/claimActions/CommunicationAcknowledge'
import {
  CommunicationsBodyPaginationQuery,
  PortfolioType,
} from './__generated__/CommunicationsBodyPaginationQuery.graphql'
import { CommunicationsBody_data$key } from './__generated__/CommunicationsBody_data.graphql'

type CommunicationsBody = {
  portfolio?: PortfolioType
  data: CommunicationsBody_data$key | null
}
const CommunicationsBody: React.FC<CommunicationsBody> = props => {
  const { data, refetch, isLoadingNext } = usePaginationFragment<
    CommunicationsBodyPaginationQuery,
    CommunicationsBody_data$key
  >(
    graphql`
      fragment CommunicationsBody_data on Query
        @refetchable(queryName: "CommunicationsBodyPaginationQuery")
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 15 }
          cursor: { type: "String", defaultValue: null }
          claimId: { type: "ID!" }
          portfolios: { type: "[PortfolioType]", defaultValue: null }
        ) {
        communicationsConnection: claimCommuications(
          first: $count
          after: $cursor
          where: { claimId: $claimId, portfolios: $portfolios }
        )
          @connection(
            key: "CommunicationsBody_data_communicationsConnection"
            filters: ["claimId", "portfolios"]
          ) {
          edges {
            node {
              acknowledged
              claimId
              communicationId
              message
              acknowledgeUserName
              acknowledgeDate
              portfolioType
              recieverCompanyId
              recieverCompanyName
              sendDate
              senderCompanyId
              senderCompanyName
              senderId
              senderName
              private
              actions {
                acknowledge {
                  isDisplay
                }
              }
              ...CommunicationAcknowledge_communication
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

  const tableData = data?.communicationsConnection?.edges?.map((edge: any) => {
    const node = edge?.node
    return {
      date: node?.sendDate,
      company: node?.senderCompanyName,
      user: node?.senderName,
      receiver: node?.recieverCompanyName,
      privacy: node?.private ? 'Private' : 'Public',
      acknowledged: node,
      message: node?.message,
    }
  })
  const tableColumns = [
    { Header: 'Date', accessor: 'date' },
    { Header: 'Company', accessor: 'company' },
    { Header: 'User', accessor: 'user' },
    { Header: 'Receiver', accessor: 'receiver' },
    { Header: 'Privacy', accessor: 'privacy' },
    {
      Header: 'Acknowledged',
      accessor: 'acknowledged',
      Cell: ({ value }: any) => {
        return (
          <>
            <CommunicationAcknowledge communication={value} />
          </>
        )
      },
    },
    { Header: 'Message', accessor: 'message' },
  ]
  return (
    <Table
      tableData={tableData}
      // isLoading={isLoadingNext}
      tableColumns={tableColumns}
    />
  )
}

export default CommunicationsBody
