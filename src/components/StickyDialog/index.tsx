import React from 'react'
import { makeStyles, Paper, Typography, IconButton } from '@material-ui/core'
import MaximizeIcon from '@material-ui/icons/Maximize'
import MinimizeIcon from '@material-ui/icons/Minimize'
import CloseIcon from '@material-ui/icons/Close'

type StickyDialogProps = {
  open: boolean
  handleClose: () => void

  title: any
  content: any
}
const StickyDialog: React.FC<StickyDialogProps> = ({
  open,
  handleClose,
  title,
  content,
}) => {
  const classes = useStyles()
  const [collapsed, setCollapsed] = React.useState(false)
  const handleToggle = () => setCollapsed(pre => !pre)

  if (!open) return null

  return (
    <Paper className={classes.paper}>
      <div className={classes.header}>
        <Typography variant="subtitle2" className={classes.title}>
          {title}
        </Typography>
        <IconButton onClick={handleToggle} className={classes.headerBtn}>
          {collapsed ? <MaximizeIcon /> : <MinimizeIcon />}
        </IconButton>
        <IconButton onClick={handleClose} className={classes.headerBtn}>
          <CloseIcon />
        </IconButton>
      </div>
      <div
        className={classes.content}
        style={{ display: collapsed ? 'none' : 'flex' }}
      >
        {content}
      </div>
    </Paper>
  )
}
export default StickyDialog
const useStyles = makeStyles(theme => ({
  paper: {
    minWidth: 300,
    maxWidth: 450,
    marginRight: theme.spacing(2),
  },
  header: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px 4px 0 0',
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(),
  },
  headerBtn: {
    padding: theme.spacing(),
    color: theme.palette.primary.contrastText,
  },
  content: {
    padding: theme.spacing(2),
  },
}))
