import React from 'react'
import ComboBoxField, {
  ComboBoxFieldProps,
} from 'components/Formik/ComboBoxField'
import EventIcon from '@material-ui/icons/Event'

import { useRefetchableFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { BuilderComboBoxRefetchQuery } from './__generated__/BuilderComboBoxRefetchQuery.graphql'
import { BuilderComboBox_data$key } from './__generated__/BuilderComboBox_data.graphql'

type BuilderProps = ComboBoxFieldProps & {
  data: BuilderComboBox_data$key | null
  selectedPostcode?: string
}
const BuilderComboBox: React.FC<BuilderProps> = props => {
  const [data, refetch] = useRefetchableFragment<
    BuilderComboBoxRefetchQuery,
    BuilderComboBox_data$key
  >(
    graphql`
      fragment BuilderComboBox_data on Query
        @refetchable(queryName: "BuilderComboBoxRefetchQuery")
        @argumentDefinitions(
          companyIds: { type: "[ID!]" }
          postcode: { type: "String" }
        ) {
        builders: claimFilterOptions(
          where: {
            subject: "suppliers"
            portfolios: [Building]
            insurers: $companyId
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

  const options = (data?.builders ?? []) as any
  return (
    <ComboBoxField
      {...props}
      options={options}
      startAdornment={<EventIcon />}
    />
  )
}
export default BuilderComboBox
