import React from 'react'

import Card from 'components/Card'
import { useFormikContext } from 'formik'
import CheckboxGroupField, {
  Option,
} from 'components/Formik/CheckboxGroupField'

import { useRefetchableFragment, useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { QuotingBuilderRefetchQuery } from './__generated__/QuotingBuilderRefetchQuery.graphql'
import { QuotingBuildersCard_options$key } from './__generated__/QuotingBuildersCard_options.graphql'
import { QuotingBuildersCard_meta$key } from './__generated__/QuotingBuildersCard_meta.graphql'

type QuotingBuildersCardProps = {
  options: QuotingBuildersCard_options$key | null
  meta: QuotingBuildersCard_meta$key | null
}
const QuotingBuildersCard: React.FC<QuotingBuildersCardProps> = props => {
  const meta = useFragment(
    graphql`
      fragment QuotingBuildersCard_meta on CompanyProfile {
        quotesperclaim
      }
    `,
    props.meta
  )

  const [options, refetch] = useRefetchableFragment<
    QuotingBuilderRefetchQuery,
    QuotingBuildersCard_options$key
  >(
    graphql`
      fragment QuotingBuildersCard_options on Query
        @refetchable(queryName: "QuotingBuilderRefetchQuery")
        @argumentDefinitions(
          companyId: { type: "[ID!]", defaultValue: "0" }
          postcode: { type: "String", defaultValue: "0" }
        ) {
        quotingBuilders: claimFilterOptions(
          where: {
            subject: "suppliers"
            insurers: $companyId
            postcode: $postcode
            portfolios: [Building]
          }
        ) {
          label: name
          value
        }
      }
    `,
    props.options
  )

  const fieldName = 'portfolios[0].quotingSupplierIds'
  const suppliersOptions = (options?.quotingBuilders ?? null) as Option[] | null

  const { values, setFieldValue } = useFormikContext<any>()
  const isBuilding = values?.meta?.portfolio?.includes('Building')
  const selectedPostcode = values?.incidentDetail?.riskAddress?.postcode ?? 0

  const isDisabled = !isBuilding || !selectedPostcode
  const isSupplier = Boolean(options?.quotingBuilders?.length)

  const [isFetched, setIsFetched] = React.useState(false)
  React.useEffect(() => {
    if (isBuilding && selectedPostcode?.length === 4) {
      refetch(
        { postcode: String(selectedPostcode) },
        { onComplete: () => setIsFetched(true) }
      )
    }
  }, [isBuilding, selectedPostcode, refetch])

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
    <Card title="Quoting Builders">
      {isDisabled ? (
        <>
          Within Customer Details section, please select Supplier Required and
          input postcode
        </>
      ) : !isSupplier ? (
        <>No builder found, please try changing postcode</>
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
export default QuotingBuildersCard
