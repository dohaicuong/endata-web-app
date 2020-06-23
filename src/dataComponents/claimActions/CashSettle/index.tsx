import React from 'react'
import { Button, ButtonProps, makeStyles, Dialog } from '@material-ui/core'
import { Formik, Form } from 'formik'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { CashSettle_data$key } from './__generated__/CashSettle_data.graphql'
import CashSettleForm from './CashSettleForm'

type CashSettleProps = ButtonProps & {
  data: CashSettle_data$key | null
  label?: string
}
const CashSettle: React.FC<CashSettleProps> = props => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const data = useFragment(
    graphql`
      fragment CashSettle_data on Query {
        ...PaymentTypeSelect_data @arguments(claimId: $claimId)
        ...PaymentMethodSelect_data @arguments(claimId: $claimId)
      }
    `,
    props.data
  )

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
        onClose={handleClose}
        open={open}
        classes={{ paper: classes.paper }}
      >
        <Formik
          initialValues={{}}
          onSubmit={values => {
            console.log(values)
          }}
        >
          <Form>
            <CashSettleForm data={data} handleClose={handleClose} />
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
