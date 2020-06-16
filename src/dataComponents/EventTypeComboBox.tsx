import React from 'react'

import ComboBoxField, {
  ComboBoxFieldProps,
} from 'components/Formik/ComboBoxField'
import EventIcon from '@material-ui/icons/Event'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { EventTypeComboBox_data$key } from './__generated__/EventTypeComboBox_data.graphql'

type EventTypeComboBoxProps = ComboBoxFieldProps & {
  data: EventTypeComboBox_data$key | null
}
const EventTypeComboBox: React.FC<EventTypeComboBoxProps> = props => {
  const data = useFragment(
    graphql`
      fragment EventTypeComboBox_data on Query
        @argumentDefinitions(companyIds: { type: "[ID!]" }) {
        eventTypes: claimFilterOptions(
          where: { subject: "eventTypes", insurers: $companyIds }
        ) {
          label: name
          value
        }
      }
    `,
    props.data
  )

  const options = (data?.eventTypes ?? []) as any
  return (
    <ComboBoxField
      startAdornment={<EventIcon />}
      options={options}
      {...props}
    />
  )
}
export default EventTypeComboBox
