import React from 'react'
import { Button } from '@material-ui/core'
import { useSnackbar } from 'notistack'
import { graphql } from 'babel-plugin-relay/macro'
import { useMutation, useFragment } from 'react-relay/hooks'
import { JobNotesInitialCallMutation } from './__generated__/JobNotesInitialCallMutation.graphql'
import { JobNotesInitialCall_claim$key } from './__generated__/JobNotesInitialCall_claim.graphql'

type JobNotesInitialCallProps = {
  claim: JobNotesInitialCall_claim$key | null
}
const JobNotesInitialCall: React.FC<JobNotesInitialCallProps> = props => {
  const claim = useFragment(
    graphql`
      fragment JobNotesInitialCall_claim on Query {
        claimJob(where: { id: $claimId }) {
          id
        }
      }
    `,
    props.claim
  )
  const claimId = claim?.claimJob?.id ?? ''

  const [commit, isInFly] = useMutation<JobNotesInitialCallMutation>(graphql`
    mutation JobNotesInitialCallMutation($claimId: ID!) {
      claimInitialCall(where: { id: $claimId }) {
        success
        messages
        result {
          progress {
            initialCallMade
          }
        }
      }
    }
  `)

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const handleClick = () => {
    enqueueSnackbar('Please confirm that initial call has been made', {
      persist: true,
      action: key => (
        <>
          <Button
            color="inherit"
            disabled={isInFly}
            onClick={() => {
              commit({
                variables: { claimId },
                onCompleted: (res, errors) => {
                  closeSnackbar(key)

                  if (errors) {
                    return errors.forEach(error =>
                      enqueueSnackbar(error.message, { variant: 'error' })
                    )
                  }

                  const data = res.claimInitialCall
                  data?.messages.forEach(message =>
                    enqueueSnackbar(message, {
                      variant: data.success ? 'success' : 'error',
                    })
                  )
                },
              })
            }}
          >
            Call Made
          </Button>
          <Button
            color="inherit"
            disabled={isInFly}
            onClick={() => closeSnackbar(key)}
          >
            Not Yet
          </Button>
        </>
      ),
    })
  }

  return (
    <Button onClick={handleClick} disabled={isInFly}>
      Initial Call
    </Button>
  )
}
export default JobNotesInitialCall
