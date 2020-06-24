import React from 'react'
import { Button, ButtonProps } from '@material-ui/core'
import { useSnackbar } from 'notistack'

import { useFragment, useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { OfferAccept_data$key } from './__generated__/OfferAccept_data.graphql'
import { OfferAcceptMutation } from './__generated__/OfferAcceptMutation.graphql'

type OfferAcceptProps = ButtonProps & {
  label?: string
  data: OfferAccept_data$key | null
}
const OfferAccept: React.FC<OfferAcceptProps> = props => {
  const [commit, isInFly] = useMutation<OfferAcceptMutation>(graphql`
    mutation OfferAcceptMutation($id: ID!, $portfolio: PortfolioType!) {
      claimAcceptRequest(where: { id: $id, portfolioType: $portfolio }) {
        messages
        success
        result {
          jobSuppliers {
            quote {
              id
              quoteJobStatus {
                statusName
              }
              supplier {
                companyName
              }
            }
          }
        }
      }
    }
  `)

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const handleClick = ({ id, portfolio }: any) => {
    enqueueSnackbar('Do you want to accept this offer now?', {
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

                  const response = res.claimAcceptRequest
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
            Accept
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
      fragment OfferAccept_data on Query
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
    <Button
      color="primary"
      variant="outlined"
      size="large"
      {...props}
      onClick={() => handleClick({ id: supplier?.id, portfolio })}
      disabled={isInFly}
    >
      {props.label ? props.label : 'Accept Offer'}
    </Button>
  )
}
export default OfferAccept
