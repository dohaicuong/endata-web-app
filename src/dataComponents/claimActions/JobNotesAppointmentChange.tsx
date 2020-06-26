import React from 'react'
import { Button, Dialog, makeStyles, Grid, Typography } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { useSnackbar } from 'notistack'
import DateField from 'components/Formik/DateField'

import { graphql } from 'babel-plugin-relay/macro'
import { useMutation, useFragment } from 'react-relay/hooks'
import { JobNotesAppointmentChange_claim$key } from './__generated__/JobNotesAppointmentChange_claim.graphql'
import { JobNotesAppointmentChangeMutation } from './__generated__/JobNotesAppointmentChangeMutation.graphql'
import ActionButton from 'dataComponents/ActionButton'
import { JobNotesAppointmentChange_action$key } from './__generated__/JobNotesAppointmentChange_action.graphql'

type JobNotesAppointmentChangeProps = {
  claim: JobNotesAppointmentChange_claim$key | null
  action: JobNotesAppointmentChange_action$key | null
}
const JobNotesAppointmentChange: React.FC<JobNotesAppointmentChangeProps> = props => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const action = useFragment(
    graphql`
      fragment JobNotesAppointmentChange_action on ClaimJobAction {
        changeAppointment {
          ...ActionButton_action
        }
      }
    `,
    props.action
  )

  const claim = useFragment(
    graphql`
      fragment JobNotesAppointmentChange_claim on Query {
        claimJob(where: { id: $claimId }) {
          id
        }
      }
    `,
    props.claim
  )
  const claimId = claim?.claimJob?.id ?? ''

  const [commit, isInFly] = useMutation<
    JobNotesAppointmentChangeMutation
  >(graphql`
    mutation JobNotesAppointmentChangeMutation(
      $claimId: ID!
      $input: AppointmentInput!
    ) {
      claimMakeAppointment(where: { id: $claimId }, input: $input) {
        success
        messages
        result {
          progress {
            appointmentBooked
          }
          claimStatus {
            statusId
          }
        }
      }
    }
  `)

  return (
    <>
      <ActionButton
        action={action?.changeAppointment ?? null}
        onClick={handleOpen}
        disabled={isInFly}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
      >
        <Formik
          initialValues={{ appointmentDate: new Date() }}
          onSubmit={values => {
            commit({
              variables: {
                claimId,
                input: values,
              },
              onCompleted: (res, errors) => {
                handleClose()

                if (errors) {
                  return errors.forEach(error =>
                    enqueueSnackbar(error.message, { variant: 'error' })
                  )
                }

                const data = res.claimMakeAppointment
                data?.messages.forEach(message =>
                  enqueueSnackbar(message, {
                    variant: data.success ? 'success' : 'error',
                  })
                )
              },
            })
          }}
        >
          <Form>
            <Grid container spacing={2} className={classes.container}>
              <Grid item xs={12}>
                <Typography variant="h6">Change Appointment</Typography>
              </Grid>
              <Grid item xs={12}>
                <DateField
                  label="Appointment Date"
                  name="appointmentDate"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className={classes.actionArea}>
                <Button
                  color="primary"
                  onClick={handleClose}
                  disabled={isInFly}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  disabled={isInFly}
                >
                  Change appointment
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Dialog>
    </>
  )
}
export default JobNotesAppointmentChange
const useStyles = makeStyles(theme => ({
  paper: {
    minWidth: '40%',
    maxWidth: '60%',
    maxHeight: '70vh',
  },
  container: {
    padding: theme.spacing(2),
    width: '100%',
    margin: 0,
  },
  actionArea: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))
