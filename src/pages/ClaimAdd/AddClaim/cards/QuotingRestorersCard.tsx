import React from 'react'

import Card from 'components/Card'
import { useFormikContext } from 'formik'
import CheckboxGroupField, {
  Option,
} from 'components/Formik/CheckboxGroupField'

import { useRefetchableFragment, useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { QuotingRestorersRefetchQuery } from './__generated__/QuotingRestorersRefetchQuery.graphql'
import { QuotingRestorersCard_options$key } from './__generated__/QuotingRestorersCard_options.graphql'
import { QuotingRestorersCard_meta$key } from './__generated__/QuotingRestorersCard_meta.graphql'

type QuotingRestorersCardProps = {
  options: QuotingRestorersCard_options$key | null
  meta: QuotingRestorersCard_meta$key | null
}
const QuotingRestorersCard: React.FC<QuotingRestorersCardProps> = props => {
  const meta = useFragment(
    graphql`
      fragment QuotingRestorersCard_meta on CompanyProfile {
        quotesperclaim
      }
    `,
    props.meta
  )

  const [options, refetch] = useRefetchableFragment<
    QuotingRestorersRefetchQuery,
    QuotingRestorersCard_options$key
  >(
    graphql`
      fragment QuotingRestorersCard_options on Query
        @refetchable(queryName: "QuotingRestorersRefetchQuery")
        @argumentDefinitions(
          companyId: { type: "[ID!]", defaultValue: "0" }
          postcode: { type: "String", defaultValue: "0" }
        ) {
        quotingRestorers: claimFilterOptions(
          where: {
            subject: "suppliers"
            insurers: $companyId
            postcode: $postcode
            portfolios: [Restoration]
          }
        ) {
          label: name
          value
        }
      }
    `,
    props.options
  )

  const fieldName = 'portfolios[2].quotingSupplierIds'
  const suppliersOptions = (options?.quotingRestorers ?? null) as
    | Option[]
    | null

  const { values, setFieldValue } = useFormikContext<any>()
  const isRestoration = values?.meta?.portfolio?.includes('Restoration')
  const selectedPostcode = values?.incidentDetail?.riskAddress?.postcode ?? 0

  const isDisabled = !isRestoration || !selectedPostcode
  const isSupplier = Boolean(options?.quotingRestorers?.length)

  const [isFetched, setIsFetched] = React.useState(false)
  React.useEffect(() => {
    if (isRestoration && selectedPostcode?.length === 4) {
      refetch(
        { postcode: String(selectedPostcode) },
        { onComplete: () => setIsFetched(true) }
      )
    }
  }, [isRestoration, selectedPostcode, refetch])

  const quotesperclaim = meta?.quotesperclaim ?? false
  React.useEffect(() => {
    if (isFetched && isSupplier && quotesperclaim) {
      const defaultSuppliers = suppliersOptions
        ?.slice(0, 2)
        .map(({ value }: any) => value)
      if (defaultSuppliers) {
        setFieldValue(fieldName, defaultSuppliers)
      }
    }
    // TODO suppliersOptions
    // eslint-disable-next-line
  }, [isFetched, isSupplier, quotesperclaim])

  return (
    <Card title="Quoting Restorers">
      {isDisabled ? (
        <>
          Within Customer Details section, please select Supplier Required and
          input postcode
        </>
      ) : !isSupplier ? (
        <>No restorer found, please try changing postcode</>
      ) : (
        <CheckboxGroupField
          maxHeight="15rem"
          name={fieldName}
          options={suppliersOptions}
        />
      )}
    </Card>
  )
}
export default QuotingRestorersCard
