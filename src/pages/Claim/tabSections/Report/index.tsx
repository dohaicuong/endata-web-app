import React from 'react'
import { useClaimAction } from 'pages/Claim/actions'
import { Paper, Button, makeStyles } from '@material-ui/core'

const Report = () => {
  const classes = useStyles()
  const { nextStep } = useClaimAction()

  return (
    <div className={classes.root}>
      <Paper className={classes.actionRoot}>
        <Button
          color="primary"
          variant="outlined"
          size="large"
          onClick={nextStep.handleOpen}
        >
          Next Step
        </Button>
      </Paper>
    </div>
  )
}
export default Report

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(),
  },
  actionRoot: {
    padding: theme.spacing(),
  },
}))
