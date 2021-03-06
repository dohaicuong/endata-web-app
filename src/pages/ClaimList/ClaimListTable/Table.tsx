import React from 'react'
import { useTable, useExpanded } from 'react-table'
import {
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  makeStyles,
  CircularProgress,
} from '@material-ui/core'

type TableProps = {
  tableColumns: any
  tableData: any
  renderRowSubComponent?: any
  onRowClick?: any
  onScroll?: any
  isLoading?: boolean
}
const Table: React.FC<TableProps> = ({
  tableColumns,
  tableData,
  renderRowSubComponent,
  onRowClick,
  onScroll,
  isLoading = false,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    columns: flatColumns,
  } = useTable(
    {
      columns: tableColumns,
      data: tableData,
    },
    useExpanded
  )
  const tableClasses = useStyles()

  return (
    <Paper className={tableClasses.paper}>
      {/* {isLoading && (
        <div className={tableClasses.loading}>
          <CircularProgress />
        </div>
      )} */}
      <TableContainer
        className={tableClasses.tableContainer}
        onScroll={onScroll}
      >
        <MuiTable stickyHeader {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.getHeaderGroupProps().key}
                className={tableClasses.tableRow}
              >
                {headerGroup.headers.map(column => {
                  const widthClasses = widthStyles(column.width)
                  return (
                    <TableCell
                      {...column.getHeaderProps()}
                      key={column.getHeaderProps().key}
                      style={{ width: column.width }}
                      className={`${tableClasses.tableHeaderCell} ${widthClasses.tableHeaderWidth}`}
                    >
                      {column.render('Header')}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {!rows.length && (
              <TableRow className={tableClasses.tableRow}>
                <TableCell
                  colSpan={flatColumns?.length ?? 4}
                  className={tableClasses.tableBodyCell}
                >
                  No item found
                </TableCell>
              </TableRow>
            )}
            {rows.map(row => {
              prepareRow(row)
              // @ts-ignore
              const { isExpanded } = row
              return (
                <React.Fragment key={row.id}>
                  <TableRow
                    onClick={onRowClick ? () => onRowClick(row) : undefined}
                    className={tableClasses.tableRow}
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell, index) => {
                      return (
                        <TableCell
                          {...cell.getCellProps()}
                          key={index}
                          className={tableClasses.tableBodyCell}
                        >
                          {cell.value !== undefined ? cell.render('Cell') : '-'}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                  {isExpanded && (
                    <TableRow>
                      <TableCell
                        colSpan={flatColumns.length}
                        className={tableClasses.tableSubCell}
                      >
                        {renderRowSubComponent({ row })}
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              )
            })}
            {isLoading && (
              <TableRow>
                <TableCell
                  colSpan={flatColumns.length}
                  className={tableClasses.tableBodyCell}
                >
                  <div>
                    <CircularProgress
                      style={{ display: 'block', margin: '0 auto' }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Paper>
  )
}
export default Table

const widthStyles = makeStyles({
  tableHeaderWidth: {
    width: (props: any) => props,
  },
})

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'relative',
    height: '100%',
    borderRadius: theme.spacing(),
  },
  loading: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    background: 'rgba(236, 236, 236, 0.6)',
  },
  tableContainer: {
    maxHeight: '100%',
    borderRadius: theme.spacing(),
  },
  tableHeaderCell: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(),
    textAlign: 'center',
    fontWeight: 'bold',
    borderLeft: '1px solid #fff',
    borderRight: '1px solid #fff',
  },
  tableBodyCell: {
    textAlign: 'center',
    padding: theme.spacing(0.5),
    maxWidth: '150px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
  tableSubCell: {
    padding: '8px 16px',
  },
}))
