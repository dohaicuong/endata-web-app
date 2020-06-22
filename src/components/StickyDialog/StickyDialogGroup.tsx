import React from 'react'
import { makeStyles } from '@material-ui/core'

const StickyDialogGroup: React.FC = ({ children }) => {
  const classes = useStyles({})
  return <div className={classes.root}>{children}</div>
}

export default StickyDialogGroup
const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    left: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    zIndex: 500,
  },
})
