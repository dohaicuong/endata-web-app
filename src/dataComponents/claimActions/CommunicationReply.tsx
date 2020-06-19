import React from 'react'
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Button,
} from '@material-ui/core'
import ReplyIcon from '@material-ui/icons/Reply'
import Info from 'components/Info'
import { Formik, Form } from 'formik'
import TextAreaField from 'components/Formik/TextAreaField'
import SwitchField from 'components/Formik/SwitchField'

import { useFragment, useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { CommunicationReply_communication$key } from './__generated__/CommunicationReply_communication.graphql'
import { CommunicationReplyMutation } from './__generated__/CommunicationReplyMutation.graphql'
import { useSnackbar } from 'notistack'

type CommunicationReplyProps = {
  communication: CommunicationReply_communication$key | null
}
const CommunicationReply: React.FC<CommunicationReplyProps> = props => {
  const { enqueueSnackbar } = useSnackbar()

  const communication = useFragment(
    graphql`
      fragment CommunicationReply_communication on ClaimCommunication {
        claimRef
        senderName
        recieverCompanyName
        message

        claimId
        senderCompanyId
        senderRole
      }
    `,
    props.communication
  )

  const [commit] = useMutation<CommunicationReplyMutation>(graphql`
    mutation CommunicationReplyMutation($input: ClaimCommunicationCreate!) {
      createClaimCommunication(input: $input) {
        success
        messages
      }
    }
  `)

  const [open, setOpen] = React.useState(false)
  const handleStopPropagation = (e: any) => {
    e.stopPropagation()
  }
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleStopPropagation(e)
    setOpen(true)
  }
  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleStopPropagation(e)
    setOpen(false)
  }

  return (
    <>
      <IconButton onClick={handleOpen}>
        <ReplyIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} onClick={handleStopPropagation}>
        <DialogTitle>Reply</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              message: '',
              private: true,
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (
                communication?.claimId &&
                communication?.senderCompanyId &&
                communication.senderRole
              ) {
                const input = {
                  ...values,
                  claimId: communication.claimId,
                  receiverCompanyId: communication.senderCompanyId,
                  receiverRole: communication.senderRole,
                }

                commit({
                  variables: {
                    input,
                  },
                  onCompleted: (res, errors) => {
                    setSubmitting(false)
                    if (errors)
                      return errors.forEach(error =>
                        enqueueSnackbar(error.message, { variant: 'error' })
                      )

                    const data = res.createClaimCommunication
                    data?.messages.forEach(message =>
                      enqueueSnackbar(message, {
                        variant: data.success ? 'success' : 'error',
                      })
                    )

                    if (data?.success) setOpen(false)
                  },
                })
              }
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Info
                      label="Ins Ref#"
                      value={communication?.claimRef}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Info
                      label="Sender"
                      value={communication?.senderName}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Info
                      label="Company"
                      value={communication?.recieverCompanyName}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Info
                      label="Message"
                      value={communication?.message}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <SwitchField label="Privacy" name="private" fullWidth />
                  </Grid>
                  <Grid item xs={8}></Grid>
                  <Grid item xs={12}>
                    <TextAreaField
                      label="Message"
                      name="message"
                      fullWidth
                      variant="outlined"
                      rows={5}
                      rowsMax={8}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      size="large"
                      style={{ marginRight: 8 }}
                      onClick={(e: any) => handleSubmit(e)}
                      disabled={isSubmitting}
                    >
                      Reply
                    </Button>
                    <Button
                      onClick={handleClose}
                      size="large"
                      disabled={isSubmitting}
                    >
                      Close
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  )
}
export default CommunicationReply
