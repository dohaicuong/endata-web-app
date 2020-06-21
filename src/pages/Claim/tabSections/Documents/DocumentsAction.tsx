import React from 'react'
import { Paper, makeStyles, Button } from '@material-ui/core'
import { useClaimAction } from 'pages/Claim/actions'

type DocumentsActionProps = {
  actions: any
}
const DocumentsAction: React.FC<DocumentsActionProps> = props => {
  const classes = useStyles()
  const { nextStep } = useClaimAction()

  return (
    <Paper className={classes.actionRoot}>
      <Button
        className={classes.actionButton}
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
      >
        Upload File
      </Button>
      <Button
        className={classes.actionButton}
        color="primary"
        variant="outlined"
        size="large"
      >
        View All Photos
      </Button>
    </Paper>
  )
}
export default DocumentsAction

const useStyles = makeStyles(theme => ({
  actionRoot: {
    display: 'flex',
    padding: theme.spacing(),
    marginTop: theme.spacing(),
  },
  pad: { flexGrow: 1 },
  actionButton: {
    marginRight: theme.spacing(),
  },
}))
