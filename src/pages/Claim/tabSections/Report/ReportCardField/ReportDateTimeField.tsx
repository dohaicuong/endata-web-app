import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { Field } from 'formik'
import { DateTimePicker } from 'formik-material-ui-pickers'
import { ReportDateTimeField_field$key } from './__generated__/ReportDateTimeField_field.graphql'

export type ReportDateTimeFieldProps = {
  field: ReportDateTimeField_field$key | null
  parentFieldName?: string
}
const ReportDateTimeField: React.FC<ReportDateTimeFieldProps> = props => {
  const field = useFragment(
    graphql`
      fragment ReportDateTimeField_field on DateTimeField {
        label
        name
      }
    `,
    props.field
  )

  if (!field) return null
  const name = props.parentFieldName
    ? `${props.parentFieldName}.${field.name}`
    : field.name

  return (
    <Field
      component={DateTimePicker}
      label={field.label}
      name={name}
      inputVariant="outlined"
      variant="inline"
      format="dd/MM/yyyy hh:mm a"
      fullWidth
    />
  )
}
export default ReportDateTimeField
