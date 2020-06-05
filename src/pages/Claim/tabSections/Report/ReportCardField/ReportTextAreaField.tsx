import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ReportTextAreaField_field$key } from './__generated__/ReportTextAreaField_field.graphql'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

export type ReportTextAreaFieldProps = {
  field: ReportTextAreaField_field$key | null
  parentFieldName?: string
}
const ReportTextAreaField: React.FC<ReportTextAreaFieldProps> = props => {
  const field = useFragment(
    graphql`
      fragment ReportTextAreaField_field on TextAreaField {
        label
        name
        rows
        rowsMax
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
      variant="outlined"
      fullWidth
      component={TextField}
      multiline
      label={field.label}
      name={name}
      rows={field.rows}
      rowsMax={field.rowsMax}
    />
  )
}
export default ReportTextAreaField
