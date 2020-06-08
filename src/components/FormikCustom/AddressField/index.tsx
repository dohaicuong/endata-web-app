import React from 'react'

import TextField, { FormikTextFieldProps } from 'components/Formik/TextField'

export const addressRegexp = /[^\sA-Za-z0-9#'.,\-/]/

export type FormikAddressFieldProps = FormikTextFieldProps

const AddressField: React.FC<FormikAddressFieldProps> = ({
  validate,
  ...props
}) => {
  return (
    <TextField
      {...props}
      validate={value => {
        if (value && addressRegexp.test(value)) return 'Invalid address!'

        if (validate) return validate(value)
      }}
    />
  )
}
export default AddressField
