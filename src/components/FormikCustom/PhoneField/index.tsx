import React from 'react'

import TextField, { FormikTextFieldProps } from 'components/Formik/TextField'
import NumberFormat from 'react-number-format'

type PhoneFieldProps = FormikTextFieldProps & {
  format?: string
}
const PhoneField: React.FC<PhoneFieldProps> = ({ format, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        inputComponent: PhoneFormat,
        inputProps: {
          autoComplete: 'disabled_auto_complete',
          format,
        },
      }}
    />
  )
}
export default PhoneField

const PhoneFormat = ({ inputRef, onChange, name, ...props }: any) => {
  return (
    <NumberFormat
      {...props}
      allowNegative={false}
      decimalScale={0}
      format="#### ### ###"
      name={name}
      getInputRef={inputRef}
      onValueChange={(values: any) => {
        onChange({
          target: {
            name,
            value: values.floatValue,
          },
        })
      }}
    />
  )
}
