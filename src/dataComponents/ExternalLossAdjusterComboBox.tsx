import React from 'react'

import ComboBoxField, {
  ComboBoxFieldProps,
} from 'components/Formik/ComboBoxField'
import EventIcon from '@material-ui/icons/Event'

import { useRefetchableFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ExternalLossAdjusterComboBoxRefetchQuery } from './__generated__/ExternalLossAdjusterComboBoxRefetchQuery.graphql'
import { ExternalLossAdjusterComboBox_data$key } from './__generated__/ExternalLossAdjusterComboBox_data.graphql'

type ExternalLossAdjusterComboBoxProps = ComboBoxFieldProps & {
  data: ExternalLossAdjusterComboBox_data$key | null
  selectedPostcode?: string
}
const ExternalLossAdjusterComboBox: React.FC<ExternalLossAdjusterComboBoxProps> = props => {
  const [data, refetch] = useRefetchableFragment<
    ExternalLossAdjusterComboBoxRefetchQuery,
    ExternalLossAdjusterComboBox_data$key
  >(
    graphql`
      fragment ExternalLossAdjusterComboBox_data on Query
        @refetchable(queryName: "ExternalLossAdjusterComboBoxRefetchQuery")
        @argumentDefinitions(
          companyIds: { type: "[ID!]" }
          postcode: { type: "String" }
        ) {
        adjusters: claimFilterOptions(
          where: {
            subject: "adjusters"
            insurers: $companyIds
            postcode: $postcode
          }
        ) {
          label: name
          value
        }
      }
    `,
    props.data
  )

  React.useEffect(() => {
    if (props.selectedPostcode === undefined) refetch({})

    if (props.selectedPostcode?.length === 4) {
      refetch({ postcode: props.selectedPostcode })
    }
  }, [props.selectedPostcode, refetch])

  const options = (data?.adjusters ?? []) as any
  return (
    <ComboBoxField
      {...props}
      options={options}
      startAdornment={<EventIcon />}
    />
  )
}
export default ExternalLossAdjusterComboBox
