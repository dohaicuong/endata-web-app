import React from 'react'

import TextField, { FormikTextFieldProps } from 'components/Formik/TextField'

export const refNumberRegexp = /^[A-Za-z0-9]+$/

export type FormikRefNumberFieldProps = FormikTextFieldProps

const RefNumberField: React.FC<FormikRefNumberFieldProps> = ({
  validate,
  ...props
}) => {
  return (
    <TextField
      {...props}
      validate={value => {
        if (value && !refNumberRegexp.test(value))
          return 'Invalid reference number'

        if (validate) return validate(value)
      }}
    />
  )
}
export default RefNumberField
