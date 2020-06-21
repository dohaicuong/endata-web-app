import React from 'react'

import { makeStyles, Paper, Button } from '@material-ui/core'
import { useClaimAction } from 'pages/Claim/actions'
import ActionButton from 'dataComponents/ActionButton'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobNotesActions_actions$key } from './__generated__/JobNotesActions_actions.graphql'

type JobNotesActionsProps = {
  actions: JobNotesActions_actions$key | null
}
const JobNotesActions: React.FC<JobNotesActionsProps> = props => {
  const classes = useStyles()
  const { nextStep } = useClaimAction()

  const actions = useFragment(
    graphql`
      fragment JobNotesActions_actions on ClaimJobAction {
        makeLossAdjusterInitialCall {
          ...ActionButton_action
        }
        makeLossAdjusterAppointment {
          ...ActionButton_action
        }
        updateReserve {
          ...ActionButton_action
        }
        awaitingInfo {
          ...ActionButton_action
        }
        addJobNote {
          ...ActionButton_action
        }
      }
    `,
    props.actions
  )

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
      <ActionButton action={actions?.makeLossAdjusterInitialCall ?? null} />
      <ActionButton action={actions?.makeLossAdjusterAppointment ?? null} />
      <ActionButton action={actions?.updateReserve ?? null} />
      <ActionButton action={actions?.awaitingInfo ?? null} />
      <ActionButton action={actions?.addJobNote ?? null} />
    </Paper>
  )
}
export default JobNotesActions

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
