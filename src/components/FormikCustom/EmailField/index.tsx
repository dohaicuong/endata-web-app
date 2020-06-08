import React from 'react'

import TextField, { FormikTextFieldProps } from 'components/Formik/TextField'

export const emailRegexp = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))/

export type FormikEmailFieldProps = FormikTextFieldProps

const EmailField: React.FC<FormikEmailFieldProps> = ({
  validate,
  ...props
}) => {
  return (
    <TextField
      {...props}
      validate={value => {
        if (value && !emailRegexp.test(value)) return 'Invalid email!'

        if (validate) return validate(value)
      }}
    />
  )
}
export default EmailField
