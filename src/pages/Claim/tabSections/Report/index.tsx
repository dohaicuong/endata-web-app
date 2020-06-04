import React from 'react'
import { makeStyles } from '@material-ui/core'
import ReportActions from './ReportActions'

const Report = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ReportActions />
    </div>
  )
}
export default Report

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(),
  },
}))
