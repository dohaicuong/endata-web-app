import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  paper: {
    height: '100%',
  },
  tableContainer: {
    maxHeight: '100%',
  },
  tableHeaderCell: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(),
    textAlign: 'center',
    minWidth: 150,
    borderLeft: '1px solid #fff',
    borderRight: '1px solid #fff',
  },
  tableBodyCell: {
    textAlign: 'center',
    padding: theme.spacing(),
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
