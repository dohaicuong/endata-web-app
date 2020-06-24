import React from 'react'
import { Button, ButtonProps } from '@material-ui/core'

import { useSnackbar } from 'notistack'
import { useFragment, useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { OfferDecline_data$key } from './__generated__/OfferDecline_data.graphql'
import { OfferDeclineMutation } from './__generated__/OfferDeclineMutation.graphql'

type OfferDeclineProps = ButtonProps & {
  label?: string
  data: OfferDecline_data$key | null
}
const OfferDecline: React.FC<OfferDeclineProps> = props => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const [commit, isInFly] = useMutation<OfferDeclineMutation>(graphql`
    mutation OfferDeclineMutation($id: ID!, $portfolio: PortfolioType!) {
      claimDeclineRequest(where: { id: $id, portfolioType: $portfolio }) {
        messages
        success
      }
    }
  `)
  const handleClick = ({ id, portfolio }: any) => {
    enqueueSnackbar('Do you want to decline this offer now?', {
      persist: true,
      action: key => (
        <>
          <Button
            onClick={() => {
              commit({
                variables: { id, portfolio },
                onCompleted: (res, errors) => {
                  closeSnackbar(key)
                  if (errors) {
                    return errors.forEach(error => {
                      enqueueSnackbar(error.message, { variant: 'error' })
                    })
                  }

                  const response = res.claimDeclineRequest
                  response?.messages.map(message => {
                    enqueueSnackbar(message, {
                      variant: response?.success ? 'success' : 'error',
                    })
                  })
                },
              })
            }}
            disabled={isInFly}
            color="inherit"
          >
            Decline
          </Button>
          <Button onClick={() => closeSnackbar(key)} color="inherit">
            Cancel
          </Button>
        </>
      ),
    })
  }

  const data = useFragment(
    graphql`
      fragment OfferDecline_data on Query
        @argumentDefinitions(claimId: { type: "ID!" }) {
        currentUser {
          userType
          claimJob(where: { id: $claimId }) {
            building {
              jobSuppliers {
                id
                quote {
                  id
                }
              }
            }
            restoration {
              jobSuppliers {
                id
                quote {
                  id
                }
              }
            }
          }
        }
      }
    `,
    props.data
  )
  const portfolio =
    data?.currentUser?.userType === 'Builder'
      ? 'Building'
      : data?.currentUser?.userType === 'Restorer'
      ? 'Restoration'
      : null
  const supplier =
    data?.currentUser?.userType === 'Builder'
      ? data.currentUser.claimJob?.building?.jobSuppliers?.[0]
      : data?.currentUser?.userType === 'Restorer'
      ? data.currentUser.claimJob?.restoration?.jobSuppliers?.[0]
      : null

  if (!supplier || supplier.quote?.id) return null
  return (
    <>
      <Button
        color="primary"
        variant="outlined"
        size="large"
        {...props}
        onClick={() => handleClick({ id: supplier?.id, portfolio })}
        disabled={isInFly}
      >
        {props.label ? props.label : 'Decline Offer'}
      </Button>
    </>
  )
}
export default OfferDecline
