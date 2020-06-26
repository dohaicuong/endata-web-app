import React from 'react'
import { Button } from '@material-ui/core'
import { graphql } from 'babel-plugin-relay/macro'
import { useMutation } from 'react-relay/hooks'
import {
  WaitForInfoCancelMutation,
  PortfolioType,
} from './__generated__/WaitForInfoCancelMutation.graphql'
import { useSnackbar } from 'notistack'

type WaitForInfoCancelProps = {
  claimId: string
  portfolio: PortfolioType
}
const WaitForInfoCancel: React.FC<WaitForInfoCancelProps> = ({
  claimId,
  portfolio,
}) => {
  const { enqueueSnackbar } = useSnackbar()

  const [commit, isInFly] = useMutation<WaitForInfoCancelMutation>(graphql`
    mutation WaitForInfoCancelMutation(
      $claimId: ID!
      $portfolio: PortfolioType!
    ) {
      claimCancelAwaitingInfo(
        where: { id: $claimId, portfolioType: $portfolio }
      ) {
        success
        messages
        result {
          claimStatus {
            statusId
            statusName
          }
        }
      }
    }
  `)
  const handleCancel = () => {
    commit({
      variables: { claimId, portfolio },
      onCompleted: (res, errors) => {
        if (errors) {
          return errors.forEach(error => {
            enqueueSnackbar(error.message, { variant: 'error' })
          })
        }

        const result = res.claimCancelAwaitingInfo
        result?.messages.map(message => {
          enqueueSnackbar(message, {
            variant: result?.success ? 'success' : 'error',
          })
        })
      },
    })
  }

  return (
    <Button
      color="primary"
      variant="outlined"
      fullWidth
      onClick={handleCancel}
      disabled={isInFly}
    >
      Cancel Awaiting Info
    </Button>
  )
}
export default WaitForInfoCancel
