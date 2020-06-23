import React from 'react'
import { useRefetchableFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import {
  PaymentTypeSelectRefetchQuery,
  PortfolioType,
} from './__generated__/PaymentTypeSelectRefetchQuery.graphql'
import { PaymentTypeSelect_data$key } from './__generated__/PaymentTypeSelect_data.graphql'
import FormikSelectField, {
  FormikSelectFieldProps,
} from 'components/Formik/SelectField'

type PaymentTypeSelectProps = FormikSelectFieldProps & {
  data: PaymentTypeSelect_data$key | null
  selectedPortfolio?: PortfolioType
}
const PaymentTypeSelect: React.FC<PaymentTypeSelectProps> = ({
  selectedPortfolio,
  ...props
}) => {
  const [data, refetch] = useRefetchableFragment<
    PaymentTypeSelectRefetchQuery,
    PaymentTypeSelect_data$key
  >(
    graphql`
      fragment PaymentTypeSelect_data on Query
        @refetchable(queryName: "PaymentTypeSelectRefetchQuery")
        @argumentDefinitions(
          claimId: { type: "ID!" }
          claimPortfolioType: { type: "PortfolioType!", defaultValue: Building }
        ) {
        options: paymentTypes(
          where: { claimId: $claimId, claimPortfolioType: $claimPortfolioType }
        ) {
          label: name
          value: paymentTypeId
        }
      }
    `,
    props.data
  )

  React.useEffect(() => {
    if (selectedPortfolio) refetch({ claimPortfolioType: selectedPortfolio })
  }, [selectedPortfolio, refetch])

  return (
    <FormikSelectField
      {...props}
      options={(data?.options ?? []) as any}
      disabled={!selectedPortfolio}
    />
  )
}
export default PaymentTypeSelect
