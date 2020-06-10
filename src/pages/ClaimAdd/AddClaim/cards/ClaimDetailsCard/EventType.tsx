import React from 'react'
import renderField from '../renderField'
import ComboBoxField from 'components/Formik/ComboBoxField'
import EventIcon from '@material-ui/icons/Event'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { EventType_options$key } from './__generated__/EventType_options.graphql'

type EventTypeProps = {
  options: EventType_options$key | null
}
const EventType: React.FC<EventTypeProps> = props => {
  const options = useFragment(
    graphql`
      fragment EventType_options on Query {
        eventTypes: claimFilterOptions(
          where: { subject: "eventTypes", insurers: $companyId }
        ) {
          label: name
          value
        }
      }
    `,
    props.options
  )

  return renderField({
    component: ComboBoxField,
    label: 'Event Type',
    name: 'incidentDetail.eventTypeId',
    options: options?.eventTypes ?? [],
    required: true,
    startAdornment: <EventIcon />,
  })
}
export default EventType
