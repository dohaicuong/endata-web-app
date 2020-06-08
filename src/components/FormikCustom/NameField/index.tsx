import React from 'react'

import TextField, { FormikTextFieldProps } from 'components/Formik/TextField'

export const nameRegexp = /[^\sA-Za-zÀ-ÖØ-öø-ÿ.'\-&]/

export type FormikNameFieldProps = FormikTextFieldProps

const NameField: React.FC<FormikNameFieldProps> = ({ validate, ...props }) => {
  return (
    <TextField
      {...props}
      validate={value => {
        if (value && nameRegexp.test(value)) return 'Invalid character!'
        if (validate) return validate(value)
      }}
    />
  )
}
export default NameField
