import React from 'react'
import { useClaimAction } from 'pages/Claim/actions'
import { Paper, Button, makeStyles } from '@material-ui/core'

export type ReportActionsProps = {
  isSavedData: boolean
  isReadOnly: boolean

  // saveReport: (claimId: string, values: any) => void
  resetReport: () => void
  submitReport: () => void
}
const ReportActions: React.FC<ReportActionsProps> = ({
  isSavedData,
  isReadOnly,
  resetReport,
  submitReport,
}) => {
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
      <div className={classes.pad} />
      <Button
        className={classes.actionButton}
        color="primary"
        variant="outlined"
        size="large"
        disabled={!isSavedData || (isSavedData && !isReadOnly)}
        onClick={resetReport}
      >
        Reset
      </Button>
      <Button
        className={classes.actionButton}
        color="primary"
        variant="outlined"
        size="large"
        disabled={!isSavedData || (isSavedData && isReadOnly)}
        onClick={submitReport}
      >
        Submit
      </Button>
      <Button
        className={classes.actionButton}
        color="primary"
        variant="outlined"
        size="large"
        type="submit"
        disabled={isReadOnly}
      >
        Save
      </Button>
    </Paper>
  )
}
export default ReportActions

const useStyles = makeStyles(theme => ({
  actionRoot: {
    display: 'flex',
    padding: theme.spacing(),
  },
  pad: { flexGrow: 1 },
  actionButton: {
    marginRight: theme.spacing(),
  },
}))
