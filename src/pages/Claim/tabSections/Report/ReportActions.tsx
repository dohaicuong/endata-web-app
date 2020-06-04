import React from 'react'
import { useClaimAction } from 'pages/Claim/actions'
import { Paper, Button, makeStyles } from '@material-ui/core'

const ReportActions = () => {
  const classes = useStyles()
  const { nextStep } = useClaimAction()

  return (
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
  )
}
export default ReportActions

const useStyles = makeStyles(theme => ({
  actionRoot: {
    padding: theme.spacing(),
  },
}))
