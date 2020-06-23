import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import FormikSelectField, {
  FormikSelectFieldProps,
} from 'components/Formik/SelectField'
import { PaymentMethodSelect_data$key } from './__generated__/PaymentMethodSelect_data.graphql'

type PaymentMethodSelectProps = FormikSelectFieldProps & {
  data: PaymentMethodSelect_data$key | null
}
const PaymentMethodSelect: React.FC<PaymentMethodSelectProps> = props => {
  const data = useFragment(
    graphql`
      fragment PaymentMethodSelect_data on Query
        @argumentDefinitions(claimId: { type: "ID!" }) {
        paymentMethods(where: { claimId: $claimId }) {
          label: name
          value: paymentMethodId
        }
      }
    `,
    props.data
  )

  return (
    <FormikSelectField
      {...props}
      options={(data?.paymentMethods ?? []) as any}
    />
  )
}
export default PaymentMethodSelect
