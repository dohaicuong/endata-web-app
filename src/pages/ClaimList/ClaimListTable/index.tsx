import React from 'react'

import { graphql } from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay/hooks'
import { ClaimListTablePaginationQuery } from './__generated__/ClaimListTablePaginationQuery.graphql'
import { ClaimListTable_data$key } from './__generated__/ClaimListTable_data.graphql'
import { useTable } from 'react-table'
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from '@material-ui/core'
import useTableStyles from 'hooks/useTableStyles'

type ClaimListTableProps = {
  data: ClaimListTable_data$key | null
}
const ClaimListTable: React.FC<ClaimListTableProps> = props => {
  // refetch, loadNext
  const { data } = usePaginationFragment<
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
        currentUser { userType }
        claimConnection: claimJobs(
          first: $count,
          after: $cursor,
          where: $where
        )
        @connection(key: "ClaimListTable_data_claimConnection", filters: ["where"])
        {
          totalCount
          edges {
            node {
              hasBuilding
              hasContents
              hasRestoration
              
              # Ins Ref #
              refNumber
              # Ins Company
              insurer { companyName }
              # FNOL
              lodgeDate
              # Request Date, Request
              building { jobSuppliers { requestDate requestType } }
              contents { jobSuppliers { requestDate requestType } }
              restoration { jobSuppliers { requestDate requestType } }
              # Customer
              insured { name }
              # Suburb, State
              incidentDetail { riskAddress { suburb state } }
              # Value
              building {
                authorisedValue
                scopedValue
                jobSuppliers { quote { total }}
              }
              contents { jobSuppliers { quote { total }}}
              restoration { jobSuppliers { quote { total }}}
              # Status
              building {
                jobSuppliers { quote { quoteStatus { statusName }}}
                claimStatus { statusName }
              }
              contents {
                jobSuppliers { quote { quoteStatus { statusName }}}
                claimStatus { statusName }
              }
              restoration {
                jobSuppliers { quote { quoteStatus { statusName }}}
                claimStatus { statusName }
              }
              # Builder
              building {
                authorisedSupplier { companyName }
                scopingSupplier { companyName }
              }
              # Building Status
              building { claimStatus { statusName }}
              #Days
              building { daysAtStatus }
              # Restorer
              restoration {
                authorisedSupplier { companyName }
                scopingSupplier { companyName }
              }
              # Restoration Status
              restoration { claimStatus { statusName }}
              # Content Status
              contents { claimStatus { statusName }}
            }
          }
        }
      }
    `,
    props.data
  )

  const userType = data?.currentUser?.userType
  const tableData = data?.claimConnection?.edges?.map(edge => {
    const claim = edge?.node

    const portfolios = ['Building', 'Contents', 'Restoration']
      .filter((_, index) => {
        if (!claim?.hasBuilding && index === 0) return false
        if (!claim?.hasContents && index === 1) return false
        if (!claim?.hasRestoration && index === 2) return false
        return true
      })
    const requestDate =
      userType === 'Builder' ? claim?.building?.jobSuppliers?.[0]?.requestDate :
      userType === 'Restorer' ? claim?.restoration?.jobSuppliers?.[0]?.requestDate :
      userType === 'ContentSupplier' ? claim?.contents?.jobSuppliers?.[0]?.requestDate :
      null
    const request = 
      userType === 'Builder' ? claim?.building?.jobSuppliers?.[0]?.requestType :
      userType === 'Restorer' ? claim?.restoration?.jobSuppliers?.[0]?.requestType :
      userType === 'ContentSupplier' ? claim?.contents?.jobSuppliers?.[0]?.requestType :
      null

    const value =
      userType === 'Administrator' ? claim?.building?.authorisedValue || claim?.building?.scopedValue :
      userType === 'Builder' ? claim?.building?.jobSuppliers?.[0]?.quote?.total :
      userType === 'Restorer' ? claim?.restoration?.jobSuppliers?.[0]?.quote?.total :
      userType === 'ContentSupplier' ? claim?.contents?.jobSuppliers?.[0]?.quote?.total :
      null
    const status = 
      userType === 'Builder'
        ? claim?.building?.jobSuppliers?.[0]?.quote?.quoteStatus?.statusName ||
          claim?.building?.claimStatus?.statusName
      : userType === 'Restorer'
        ? claim?.restoration?.jobSuppliers?.[0]?.quote?.quoteStatus?.statusName ||
          claim?.restoration?.claimStatus?.statusName
      : userType === 'ContentSupplier'
        ? claim?.contents?.jobSuppliers?.[0]?.quote?.quoteStatus?.statusName ||
          claim?.contents?.claimStatus?.statusName
      : null

    const builder =
      claim?.building?.authorisedSupplier?.companyName ||
      claim?.building?.scopingSupplier?.companyName ||
      null
    const restorer = 
      claim?.restoration?.authorisedSupplier?.companyName ||
      claim?.restoration?.scopingSupplier?.companyName ||
      null

    return {
      portfolios,
      refNumber: claim?.refNumber,
      companyName: claim?.insurer?.companyName,
      fnol: claim?.lodgeDate,
      requestDate,
      request,
      customerName: claim?.insured?.name,
      suburb: claim?.incidentDetail?.riskAddress?.suburb,
      state: claim?.incidentDetail?.riskAddress?.state,
      value,
      status,
      builder,
      buildingStatus: claim?.building?.claimStatus?.statusName,
      daysAtStatus: claim?.building?.daysAtStatus,
      restorer,
      restorationStatus: claim?.building?.claimStatus?.statusName,
      contentsStatus: claim?.building?.claimStatus?.statusName,
    }
  })

  const tableColumns: any[] = [
    { Header: 'Ins Ref #', accessor: 'refNumber' },
    { Header: 'Ins Company', accessor: 'companyName' },
    { show: userType === 'Administrator', Header: 'FNOL', accessor: 'fnol' },
    { show: userType !== 'Administrator', Header: 'Request Date', accessor: 'requestDate' },
    { show: userType !== 'Administrator', Header: 'Request', accessor: 'request' },
    { Header: 'Customer', accessor: 'customerName' },
    { Header: 'Suburb', accessor: 'suburb' },
    { Header: 'State', accessor: 'state' },
    { Header: 'Value', accessor: 'value' },
    { show: userType !== 'Administrator', Header: 'Status', accessor: 'status' },
    {
      show: userType === 'Administrator' || userType === 'Restorer',
      Header: 'Builder',
      accessor: 'builder',
    },
    {
      show: userType === 'Administrator',
      Header: 'Building Status',
      accessor: 'buildingStatus',
    },
    {
      show: userType === 'Administrator',
      Header: 'Days',
      accessor: 'daysAtStatus',
    },
    {
      show: userType === 'Administrator' || userType === 'Builder',
      Header: 'Restorer',
      accessor: 'restorer',
    },
    {
      show: userType === 'Administrator',
      Header: 'Restoration Status',
      accessor: 'restorationStatus',
    },
    {
      show: userType === 'Administrator',
      Header: 'Content Status',
      accessor: 'contentsStatus',
    },
  ].filter(column => column.show !== false)

  const tableClasses = useTableStyles()
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: tableColumns,
    data: tableData || []
  })

  return (
    <Paper className={tableClasses.paper}>
      <TableContainer className={tableClasses.tableContainer}>
        <Table stickyHeader {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()} className={tableClasses.tableRow}>
                {headerGroup.headers.map(column => (
                  <TableCell {...column.getHeaderProps()} className={tableClasses.tableHeaderCell}>
                    {column.render('Header')}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <React.Fragment key={row.id}>
                  <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <TableCell
                        {...cell.getCellProps()}
                        key={index}
                        className={tableClasses.tableBodyCell}
                      >
                        {cell.value !== undefined
                          ? cell.render('Cell')
                          : '-'}
                      </TableCell>
                    )
                  })}
                  </TableRow>
                </React.Fragment>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
export default ClaimListTable
