import React from 'react'

import TextField, { FormikTextFieldProps } from 'components/Formik/TextField'

export const suburbRegexp = /[^\sA-Za-z]/

export type FormikSuburbFieldProps = FormikTextFieldProps

const SuburbField: React.FC<FormikSuburbFieldProps> = ({
  validate,
  ...props
}) => {
  return (
    <TextField
      {...props}
      validate={value => {
        if (suburbRegexp.test(value)) return 'Invalid address!'

        if (validate) return validate(value)
      }}
    />
  )
}
export default SuburbField
