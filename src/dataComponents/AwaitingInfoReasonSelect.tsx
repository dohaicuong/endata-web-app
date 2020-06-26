import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useRefetchableFragment } from 'react-relay/hooks'
import FormikSelectField, {
  FormikSelectFieldProps,
} from 'components/Formik/SelectField'
import { PortfolioType } from 'pages/Claim/tabSections/JobNotes/JobNotesBody/__generated__/JobNotesBodyPaginationQuery.graphql'
import { AwaitingInfoReasonSelectRefetchQuery } from './__generated__/AwaitingInfoReasonSelectRefetchQuery.graphql'
import { AwaitingInfoReasonSelect_data$key } from './__generated__/AwaitingInfoReasonSelect_data.graphql'

type AwaitingInfoReasonProps = FormikSelectFieldProps & {
  data: AwaitingInfoReasonSelect_data$key | null
  selectedPortfolio?: PortfolioType
}
const AwaitingInfoReasonSelect: React.FC<AwaitingInfoReasonProps> = ({
  selectedPortfolio,
  ...props
}) => {
  const [data, refetch] = useRefetchableFragment<
    AwaitingInfoReasonSelectRefetchQuery,
    AwaitingInfoReasonSelect_data$key
  >(
    graphql`
      fragment AwaitingInfoReasonSelect_data on Query
        @refetchable(queryName: "AwaitingInfoReasonSelectRefetchQuery")
        @argumentDefinitions(portfolios: { type: "[PortfolioType]" }) {
        claimFilterOptions(
          where: { subject: "awaitingInfoReasons", portfolios: $portfolios }
        ) {
          label: name
          value
        }
      }
    `,
    props.data
  )

  React.useEffect(() => {
    if (selectedPortfolio) refetch({ portfolios: [selectedPortfolio] })
  }, [selectedPortfolio, refetch])

  return (
    <FormikSelectField
      {...props}
      options={(data?.claimFilterOptions ?? []) as any}
      disabled={!selectedPortfolio}
    />
  )
}
export default AwaitingInfoReasonSelect
