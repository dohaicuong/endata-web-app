import React from 'react'
import { Paper, Button, makeStyles } from '@material-ui/core'
// import { useClaimAction } from 'pages/Claim/actions'
// import { useFragment } from 'react-relay/hooks'
// import { graphql } from 'babel-plugin-relay/macro'
// import { JobInfoActions_actions$key } from './__generated__/JobInfoActions_actions.graphql'

type JobInfoActionsProps = {
  // actions: JobInfoActions_actions$key | null
}
const JobInfoActions: React.FC<JobInfoActionsProps> = props => {
  const classes = useStyles()
  // const { nextStep } = useClaimAction()

  // const actions = useFragment(
  //   graphql`
  //     fragment JobInfoActions_actions on ClaimJobAction {
  //       updateClaim {
  //         label
  //         isDisabled
  //         isDisplay
  //       }
  //     }
  //   `,
  //   props.actions
  // )

  return (
    <Paper className={classes.actionRoot}>
      <Button
        className={classes.actionButton}
        color="primary"
        variant="outlined"
        size="large"
        // onClick={nextStep.handleOpen}
      >
        Next Step
      </Button>
      <div className={classes.pad} />
      <Button
        className={classes.actionButton}
        // disabled={actions.updateClaim.isDisabled}
        color="primary"
        variant="outlined"
        size="large"
        type="submit"
        // onClick={newMessage.handleOpen}
      >
        New Message
      </Button>
    </Paper>
  )
}
export default JobInfoActions

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
