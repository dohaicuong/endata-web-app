import React from 'react'

import { makeStyles, Paper } from '@material-ui/core'
// import ActionButton from 'dataComponents/ActionButton'
import NextStep, { NextStepButton } from 'dataComponents/claimActions/NextStep'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobNotesActions_actions$key } from './__generated__/JobNotesActions_actions.graphql'
import { JobNotesActions_data$key } from './__generated__/JobNotesActions_data.graphql'
import JobNotesInitialCall from 'dataComponents/claimActions/JobNotesInitialCall'
import JobNotesAppointmentMade from 'dataComponents/claimActions/JobNotesAppointmentMade'

type JobNotesActionsProps = {
  actions: JobNotesActions_actions$key | null
  data: JobNotesActions_data$key | null
}
const JobNotesActions: React.FC<JobNotesActionsProps> = props => {
  const classes = useStyles()

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

  const data = useFragment(
    graphql`
      fragment JobNotesActions_data on Query {
        ...NextStep_data @arguments(claimId: $claimId)
        ...JobNotesInitialCall_claim
      }
    `,
    props.data
  )

  return (
    <Paper className={classes.actionRoot}>
      <React.Suspense fallback={<NextStepButton />}>
        <NextStep data={data} />
      </React.Suspense>
      <div className={classes.pad} />
      <JobNotesInitialCall claim={data} />
      <JobNotesAppointmentMade action={actions} />
      {/* <ActionButton action={actions?.makeLossAdjusterInitialCall ?? null} />
      <ActionButton action={actions?.makeLossAdjusterAppointment ?? null} />
      <ActionButton action={actions?.updateReserve ?? null} />
      <ActionButton action={actions?.awaitingInfo ?? null} />
      <ActionButton action={actions?.addJobNote ?? null} /> */}
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
