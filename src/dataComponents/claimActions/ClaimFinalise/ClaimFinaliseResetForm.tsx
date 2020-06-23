import React from 'react'
import { useFragment, useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { Button, Typography } from '@material-ui/core'
import { PortfolioType } from 'pages/Communication/__generated__/CommunicationQuery.graphql'
import { ClaimFinaliseResetForm_data$key } from './__generated__/ClaimFinaliseResetForm_data.graphql'
import { ClaimFinaliseResetFormMutation } from './__generated__/ClaimFinaliseResetFormMutation.graphql'
import { useSnackbar } from 'notistack'

type ClaimFinaliseResetFormProps = {
  claimId: string
  portfolio: PortfolioType
  data: ClaimFinaliseResetForm_data$key | null
}
const ClaimFinaliseResetForm: React.FC<ClaimFinaliseResetFormProps> = props => {
  const { enqueueSnackbar } = useSnackbar()

  const data = useFragment(
    graphql`
      fragment ClaimFinaliseResetForm_data on ClaimPortfolio {
        finaliseReason {
          name
        }
        dateCompleted
      }
    `,
    props.data
  )

  const [commit, isInFly] = useMutation<ClaimFinaliseResetFormMutation>(graphql`
    mutation ClaimFinaliseResetFormMutation($where: ENDataPortfolioKey!) {
      claimResetFinalise(where: $where) {
        success
        messages
        result {
          claimStatus {
            statusName
          }
        }
      }
    }
  `)
  const handleReset = () => {
    commit({
      variables: {
        where: {
          id: String(props.claimId),
          portfolioType: props.portfolio,
        },
      },
      onCompleted: (res, errors) => {
        if (errors) {
          return errors.forEach(error => {
            enqueueSnackbar(error.message, { variant: 'error' })
          })
        }

        res.claimResetFinalise?.messages.map(message => {
          enqueueSnackbar(message, {
            variant: res.claimResetFinalise?.success ? 'success' : 'error',
          })
        })
      },
    })
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '60%' }}>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <Typography variant="h5" gutterBottom>
          {data?.finaliseReason?.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data?.dateCompleted}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleReset}
          disabled={isInFly}
        >
          Reset Claim Finalised
        </Button>
      </div>
    </div>
  )
}
export default ClaimFinaliseResetForm
