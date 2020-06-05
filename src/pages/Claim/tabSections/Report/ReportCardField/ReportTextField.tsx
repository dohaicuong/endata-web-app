import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ReportTextField_field$key } from './__generated__/ReportTextField_field.graphql'

import { TextField } from 'formik-material-ui'
import { Field } from 'formik'

export type ReportTextFieldProps = {
  field: ReportTextField_field$key | null
  parentFieldName?: string
}
const ReportTextField: React.FC<ReportTextFieldProps> = props => {
  const field = useFragment(
    graphql`
      fragment ReportTextField_field on TextField {
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
      component={TextField}
      label={field.label}
      name={name}
      variant="outlined"
      fullWidth
    />
  )
}
export default ReportTextField
