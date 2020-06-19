import React from 'react'
import { IconButton } from '@material-ui/core'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'

import { useFragment, useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { CommunicationAcknowledge_communication$key } from './__generated__/CommunicationAcknowledge_communication.graphql'
import { CommunicationAcknowledgeMutation } from './__generated__/CommunicationAcknowledgeMutation.graphql'
import { useSnackbar } from 'notistack'

type CommunicationAcknowledgeProps = {
  communication: CommunicationAcknowledge_communication$key | null
}
const CommunicationAcknowledge: React.FC<CommunicationAcknowledgeProps> = props => {
  const communication = useFragment(
    graphql`
      fragment CommunicationAcknowledge_communication on ClaimCommunication {
        acknowledged
        communicationId
        portfolioType
      }
    `,
    props.communication
  )

  const [commit, isInFly] = useMutation<
    CommunicationAcknowledgeMutation
  >(graphql`
    mutation CommunicationAcknowledgeMutation(
      $id: ID!
      $portfolio: PortfolioType!
    ) {
      claimCommunicationAcknoledge(
        where: { id: $id, portfolioType: $portfolio }
      ) {
        success
        messages

        result {
          id
          acknowledged
        }
      }
    }
  `)

  const { enqueueSnackbar } = useSnackbar()
  const handleAcknowledge = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation()
    e.preventDefault()
    if (!communication || !communication?.portfolioType) return null

    commit({
      variables: {
        id: String(communication.communicationId),
        portfolio: communication.portfolioType,
      },
      onCompleted: (res, errors) => {
        if (errors)
          return errors.forEach(error =>
            enqueueSnackbar(error.message, { variant: 'error' })
          )

        const data = res.claimCommunicationAcknoledge
        data?.messages.forEach(message =>
          enqueueSnackbar(message, {
            variant: data.success ? 'success' : 'error',
          })
        )
      },
    })
  }

  return (
    <IconButton onClick={handleAcknowledge} disabled={isInFly}>
      {communication?.acknowledged ? (
        <RadioButtonCheckedIcon />
      ) : (
        <RadioButtonUncheckedIcon />
      )}
    </IconButton>
  )
}
export default CommunicationAcknowledge
