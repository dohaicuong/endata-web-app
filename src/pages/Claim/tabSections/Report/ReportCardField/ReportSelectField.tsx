import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ReportSelectField_field$key } from './__generated__/ReportSelectField_field.graphql'

import { MenuItem } from '@material-ui/core'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

export type ReportSelectField = {
  field: ReportSelectField_field$key | null
  parentFieldName?: string
}
const ReportSelectField: React.FC<ReportSelectField> = props => {
  const field = useFragment(
    graphql`
      fragment ReportSelectField_field on SelectField {
        name
        label
        options {
          id
          label
          value
        }
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
      select
    >
      {field.options?.map(option => (
        <MenuItem key={option.id} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Field>
  )
}
export default ReportSelectField
