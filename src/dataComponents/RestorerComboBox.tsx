import React from 'react'
import ComboBoxField, {
  ComboBoxFieldProps,
} from 'components/Formik/ComboBoxField'
import EventIcon from '@material-ui/icons/Event'

import { useRefetchableFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { RestorerComboBoxRefetchQuery } from './__generated__/RestorerComboBoxRefetchQuery.graphql'
import { RestorerComboBox_data$key } from './__generated__/RestorerComboBox_data.graphql'

type RestorerComboBoxProps = ComboBoxFieldProps & {
  data: RestorerComboBox_data$key | null
  selectedPostcode?: string
}
const RestorerComboBox: React.FC<RestorerComboBoxProps> = props => {
  const [data, refetch] = useRefetchableFragment<
    RestorerComboBoxRefetchQuery,
    RestorerComboBox_data$key
  >(
    graphql`
      fragment RestorerComboBox_data on Query
        @refetchable(queryName: "RestorerComboBoxRefetchQuery")
        @argumentDefinitions(
          companyIds: { type: "[ID!]" }
          postcode: { type: "String" }
        ) {
        restorers: claimFilterOptions(
          where: {
            subject: "suppliers"
            portfolios: [Restoration]
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

  const options = (data?.restorers ?? []) as any
  return (
    <ComboBoxField
      {...props}
      options={options}
      startAdornment={<EventIcon />}
    />
  )
}
export default RestorerComboBox
