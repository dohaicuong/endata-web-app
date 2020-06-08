import React from 'react'

import TextField, { FormikTextFieldProps } from 'components/Formik/TextField'

export const clientNameRegexp = /[^\s0-9A-Za-zÀ-ÖØ-öø-ÿ.'\-&]/

export type FormikClientNameFieldProps = FormikTextFieldProps

const ClientNameField: React.FC<FormikClientNameFieldProps> = ({
  validate,
  ...props
}) => {
  return (
    <TextField
      {...props}
      validate={value => {
        if (value && clientNameRegexp.test(value)) return 'Invalid character!'

        if (validate) return validate(value)
      }}
    />
  )
}
export default ClientNameField
