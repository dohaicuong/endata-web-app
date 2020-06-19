import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { CommunicationTable_data$key } from './__generated__/CommunicationTable_data.graphql'

import { useHistory } from 'react-router-dom'
import Table from 'pages/ClaimList/ClaimListTable/Table'
import PortfolioIcon from 'components/PortfolioIcon'
import { Typography } from '@material-ui/core'
import CommunicationAcknowledge from 'dataComponents/claimActions/CommunicationAcknowledge'
import CommunicationReply from 'dataComponents/claimActions/CommunicationReply'

type CommunicationTableProps = {
  data: CommunicationTable_data$key | null
  isLoadingMore: boolean
  hasNext: boolean
  loadMore: () => void
}
const CommunicationTable: React.FC<CommunicationTableProps> = props => {
  const data = useFragment(
    graphql`
      fragment CommunicationTable_data on ClaimCommunicationConnection {
        totalCount
        edges {
          node {
            claimId
            portfolioType
            claimRef
            sendDate
            senderName
            senderCompanyName
            message

            ...CommunicationAcknowledge_communication
            ...CommunicationReply_communication
          }
        }
      }
    `,
    props.data
  )

  const tableData = data?.edges
    ?.map(edge => {
      const node = edge?.node
      if (!node) return null

      return {
        ...node,
        actionData: node,
      }
    })
    .filter(node => node)

  const tableColumns = React.useMemo(
    () => [
      {
        Header: 'Type',
        accessor: 'portfolioType',
        Cell: ({ value, row: { id } }: any) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ marginRight: 8, width: 10, fontWeight: 600 }}>
              {parseInt(id) + 1}
            </span>
            <PortfolioIcon portfolio={value} />
          </div>
        ),
      },
      { Header: 'Ins Ref#', accessor: 'claimRef' },
      { Header: 'Date', accessor: 'sendDate' },
      { Header: 'Sender', accessor: 'senderName' },
      { Header: 'Company', accessor: 'senderCompanyName' },
      { Header: 'Message', accessor: 'message' },
      {
        Header: 'Actions',
        accessor: 'actionData',
        Cell: ({ value }) => {
          return (
            <>
              <CommunicationReply communication={value} />
              <CommunicationAcknowledge communication={value} />
            </>
          )
        },
      },
    ],
    []
  )

  const { push } = useHistory()
  const onRowClick = (row: any) => {
    const claimId = row.original.claimId
    push(`/claim/${claimId}/communications`)
  }

  const onScroll = ({
    target: { scrollTop, offsetHeight, scrollHeight },
  }: any) => {
    if (props.isLoadingMore) return null

    const fetchOffset = 150
    const scrollPosition = scrollTop + offsetHeight - 5
    if (props.hasNext && scrollHeight - scrollPosition < fetchOffset) {
      props.loadMore()
    }
  }

  const totalCount = data?.totalCount ?? 0
  return (
    <>
      <Typography variant="subtitle1">
        Found {totalCount}{' '}
        {`${totalCount < 2 ? 'communication' : 'communications'}`}
      </Typography>
      <Table
        tableData={tableData}
        tableColumns={tableColumns}
        isLoading={props.isLoadingMore}
        onRowClick={onRowClick}
        onScroll={onScroll}
      />
    </>
  )
}
export default CommunicationTable
