import React from 'react'
import {
  Paper,
  Table as MuiTable,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Typography,
  CircularProgress,
} from '@material-ui/core'
import { useTable, useExpanded } from 'react-table'

interface TableWrapperProps extends TableProps {
  loading?: boolean
  loadingMore?: boolean
}

const TableWrapper: React.FC<TableWrapperProps> = ({
  loading,
  loadingMore,
  data,
  user,
  ...props
}) => {
  const getNestedData = (data: any) => {
    interface nestedData {
      _portfolios: string[]
      _requestDate: string
      _request: string
      _claimValue: string
      _claimStatus: string
      _claimBuilder: string
      _claimRestorer: string
      _insuredPhone: string
      _incidentAddress: string
      _allocatedBuilder: string
      _allocatedRestorer: string
    }
    const nestedData: nestedData = {
      _portfolios: [],
      _requestDate: '',
      _request: '',
      _claimValue: '',
      _claimStatus: '',
      _claimBuilder: '',
      _claimRestorer: '',
      _insuredPhone: '',
      _incidentAddress: '',
      _allocatedBuilder: '',
      _allocatedRestorer: '',
    }
    const { hasBuilding, hasContents, hasRestoration } = data
    const { phone1, phone2, phone3 } = data?.insured
    const { line1, suburb, state, postcode } = data?.incidentDetail?.riskAddress
    const userType = user?.userType

    if (hasBuilding) nestedData._portfolios.push('Building')
    if (hasContents) nestedData._portfolios.push('Contents')
    if (hasRestoration) nestedData._portfolios.push('Restoration')
    nestedData._requestDate =
      userType === 'Builder'
        ? data?.building?.jobSuppliers[0]?.requestDate
        : userType === 'Restorer'
        ? data?.restoration?.jobSuppliers[0]?.requestDate
        : userType === 'ContentSupplier'
        ? data?.contents?.jobSuppliers[0]?.requestDate
        : '-'
    nestedData._request =
      userType === 'Builder'
        ? data?.building?.jobSuppliers[0]?.requestType
        : userType === 'Restorer'
        ? data?.restoration?.jobSuppliers[0]?.requestType
        : userType === 'ContentSupplier'
        ? data?.contents?.jobSuppliers[0]?.requestType
        : '-'
    nestedData._insuredPhone = [phone1, phone2, phone3]
      .filter(x => x)
      .join(', ')

    nestedData._incidentAddress =
      data?.incidentDetail?.riskAddress &&
      `${line1} ${suburb} ${state}, ${postcode}`

    nestedData._claimValue =
      userType === 'Administrator'
        ? data?.building?.authorisedValue || data?.building?.scopedValue
        : userType === 'Builder'
        ? data?.building?.jobSuppliers[0]?.quote?.total
        : userType === 'Restorer'
        ? data?.restoration?.jobSuppliers[0]?.quote?.total
        : userType === 'ContentSupplier'
        ? data?.contents?.jobSuppliers[0]?.quote?.total
        : '-'

    nestedData._claimStatus =
      userType === 'Builder'
        ? data?.building?.jobSuppliers[0]?.quote?.quoteStatus?.statusName ||
          data?.building?.claimStatus?.statusName
        : userType === 'Restorer'
        ? data?.restoration?.jobSuppliers[0]?.quote?.quoteStatus?.statusName ||
          data?.restoration?.claimStatus?.statusName
        : userType === 'ContentSupplier'
        ? data?.contents?.jobSuppliers[0]?.quote?.quoteStatus?.statusName ||
          data?.contents?.claimStatus?.statusName
        : '-'

    nestedData._claimBuilder =
      (data?.building?.authorisedSupplier?.companyName ||
        data?.building?.scopingSupplier?.companyName) ??
      '-'

    nestedData._claimRestorer =
      (data?.restoration?.authorisedSupplier?.companyName ||
        data?.restoration?.scopingSupplier?.companyName) ??
      '-'

    nestedData._allocatedBuilder =
      userType === 'Builder'
        ? data?.building?.jobSuppliers?.quote?.supplier?.companyName ?? 'N/a'
        : data?.building?.authorisedSupplier?.companyName ||
          data?.building?.scopingSupplier?.companyName ||
          'N/a'

    nestedData._allocatedRestorer =
      userType === 'Restorer'
        ? data?.restoration?.jobSuppliers?.quote?.supplier?.companyName ?? 'N/a'
        : data?.restoration?.authorisedSupplier?.companyName ||
          data?.restoration?.scopingSupplier?.companyName ||
          'N/a'

    return nestedData
  }

  const classes = useStyles({})
  const loadingComponent = React.useMemo(
    () => (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </div>
    ),
    []
  )
  const newData = data.map((e: any) => {
    return { ...e, ...getNestedData(e) }
  })

  if (loading)
    return <div className={classes.container}>{loadingComponent}</div>

  if (!data) return null

  return (
    <div className={classes.container}>
      {!loadingMore ? null : (
        <div
          style={{
            position: 'absolute',
            top: 33,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          {loadingComponent}
        </div>
      )}
      <Table {...props} data={newData} />
    </div>
  )
}

interface TableProps {
  data?: any
  columns?: any
  totalCount?: number | null

  onRowClick?: any
  onScroll?: any
  user?: any
  renderRowSubComponent?: any
}
const Table: React.FC<TableProps> = ({
  columns,
  data,
  totalCount,
  onRowClick,
  onScroll,
  renderRowSubComponent,
}) => {
  const classes = useStyles({})

  const hiddenColumns = React.useMemo(() => {
    return columns
      ?.filter(({ show }: any) => show === false)
      .map(({ accessor, id }: any) => (id ? id : accessor))
  }, [columns])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    columns: flatColumns,
  } = useTable(
    {
      columns,
      data,
      initialState: { hiddenColumns },
    },
    useExpanded
  )

  return (
    <>
      {totalCount && totalCount !== 0 ? (
        <Typography variant="subtitle1">Found {totalCount}</Typography>
      ) : null}
      <Paper className={classes.paper}>
        <TableContainer className={classes.tableContainer} onScroll={onScroll}>
          <MuiTable stickyHeader {...getTableProps()}>
            <TableHead>
              <React.Suspense fallback="loading...">
                {headerGroups.map((headerGroup, index) => (
                  <TableRow {...headerGroup.getHeaderGroupProps()} key={index}>
                    {headerGroup.headers.map((column, index) => {
                      return (
                        <TableCell
                          {...column.getHeaderProps()}
                          key={index}
                          className={classes.tableHeaderCell}
                        >
                          {column.render('Header')}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                ))}
              </React.Suspense>
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {rows.length ? (
                rows.map(row => {
                  prepareRow(row)
                  // @ts-ignore
                  const { isExpanded } = row
                  return (
                    <React.Fragment key={row.id}>
                      <TableRow
                        className={classes.tableRow}
                        {...row.getRowProps()}
                      >
                        {row.cells.map((cell, index) => {
                          return (
                            <TableCell
                              {...cell.getCellProps()}
                              key={index}
                              className={classes.tableBodyCell}
                            >
                              {cell.value !== undefined
                                ? cell.render('Cell')
                                : '-'}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                      {isExpanded && (
                        <TableRow>
                          <TableCell colSpan={flatColumns.length}>
                            {renderRowSubComponent({ row })}
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  )
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={flatColumns?.length ?? 4}>
                    No item found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </Paper>
    </>
  )
}

export default TableWrapper

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    height: 'calc(100% - 28px)',
    padding: 2,
  },
  paper: {
    height: '100%',
  },
  tableContainer: {
    maxHeight: '100%',
  },
  tableHeaderCell: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    minWidth: 130,
    borderLeft: '1px solid #fff',
    borderRight: '1px solid #fff',
  },
  tableBodyCell: {
    textAlign: 'center',
    padding: theme.spacing(0.5),
  },
  tableRow: {
    '&:nth-child(even)': {
      background: theme.palette.grey[100],
    },
    '&:hover': {
      background: theme.palette.grey[300],
    },
    flexWrap: 'nowrap',
  },
}))
