import React from 'react'
import { Button, Dialog, makeStyles, Grid, Typography } from '@material-ui/core'
import DateField from 'components/Formik/DateField'
import { Formik, Form } from 'formik'
import { graphql } from 'babel-plugin-relay/macro'
import { useMutation } from 'react-relay/hooks'
import { JobNotesAppointmentMadeMutation } from './__generated__/JobNotesAppointmentMadeMutation.graphql'

type JobNotesAppointmentMadeProps = {
  action: any
}
const JobNotesAppointmentMade: React.FC<JobNotesAppointmentMadeProps> = props => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [commit, isInFly] = useMutation<
    JobNotesAppointmentMadeMutation
  >(graphql`
    mutation JobNotesAppointmentMadeMutation(
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
      <Button onClick={handleOpen}>Appointment Made</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
      >
        <Formik
          initialValues={{ date: new Date() }}
          onSubmit={values => {
            console.log(values)
          }}
        >
          <Form>
            <Grid container spacing={2} className={classes.container}>
              <Grid item xs={12}>
                <Typography variant="h6">Appointment</Typography>
              </Grid>
              <Grid item xs={12}>
                <DateField
                  label="Appointment Date"
                  name="date"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className={classes.actionArea}>
                <Button color="primary" onClick={handleClose}>
                  Close
                </Button>
                <Button color="primary" variant="contained" type="submit">
                  Make appointment
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Dialog>
    </>
  )
}
export default JobNotesAppointmentMade
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
