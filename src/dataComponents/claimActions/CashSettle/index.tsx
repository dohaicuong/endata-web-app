import React from 'react'
import { Button, ButtonProps, makeStyles, Dialog } from '@material-ui/core'
import { Formik, Form } from 'formik'
import CashSettleForm from './CashSettleForm'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment, useMutation } from 'react-relay/hooks'
import { CashSettle_claim$key } from './__generated__/CashSettle_claim.graphql'
import { CashSettle_data$key } from './__generated__/CashSettle_data.graphql'
import { CashSettleMutation } from './__generated__/CashSettleMutation.graphql'
import { format } from 'date-fns'
import { useSnackbar } from 'notistack'

type CashSettleProps = ButtonProps & {
  claim: CashSettle_claim$key | null
  data: CashSettle_data$key | null
  label?: string
}
const CashSettle: React.FC<CashSettleProps> = props => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const claim = useFragment(
    graphql`
      fragment CashSettle_claim on ClaimJob {
        id
      }
    `,
    props.claim
  )

  const data = useFragment(
    graphql`
      fragment CashSettle_data on Query {
        ...PaymentTypeSelect_data @arguments(claimId: $claimId)
        ...PaymentMethodSelect_data @arguments(claimId: $claimId)
      }
    `,
    props.data
  )
  const [commit, isInFly] = useMutation<CashSettleMutation>(graphql`
    mutation CashSettleMutation($input: ClaimCashSettleInput!) {
      claimCaseSettleCreate(input: $input) {
        success
        messages
        fieldErrors {
          fieldName
          level
          message
        }
      }
    }
  `)

  return (
    <>
      <Button
        onClick={handleOpen}
        color="primary"
        variant="outlined"
        {...props}
      >
        {props.label ? props.label : 'Cash Settle'}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
      >
        <Formik
          initialValues={{
            claimPortfolioType: '',
            settlementDate: new Date(),
            settlementValue: '',
            bankName: '',
            bsb: '',
            account: '',
            comments: '',
            paymentTypeId: 0,
            paymentMethodId: 0,
          }}
          onSubmit={(values, { setSubmitting }) => {
            const input = {
              ...values,
              claimId: claim?.id ?? '',
              settlementDate: format(values.settlementDate, 'dd/MM/yyyy'),
            }
            commit({
              variables: {
                input: input as any,
              },
              onCompleted: (res, errors) => {
                setSubmitting(false)

                if (errors) {
                  return errors.forEach(error => {
                    enqueueSnackbar(error.message, { variant: 'error' })
                  })
                }

                const response = res.claimCaseSettleCreate
                response?.messages.map(message => {
                  enqueueSnackbar(message, {
                    variant: response?.success ? 'success' : 'error',
                  })
                })

                if (response?.success) handleClose()
              },
            })
          }}
        >
          <Form>
            <CashSettleForm
              data={data}
              handleClose={handleClose}
              isInFly={isInFly}
            />
          </Form>
        </Formik>
      </Dialog>
    </>
  )
}
export default CashSettle
const useStyles = makeStyles(() => ({
  paper: {
    minWidth: '60%',
    maxWidth: '80%',
    maxHeight: '70vh',
  },
}))
