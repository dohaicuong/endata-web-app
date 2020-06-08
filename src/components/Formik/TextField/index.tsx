import React from 'react'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { TextFieldProps, CircularProgress } from '@material-ui/core'
import { InputAdornment } from '@material-ui/core'

export type FormikTextFieldProps = TextFieldProps & {
  name: string

  startAdornment?: React.ReactElement
  endAdornment?: React.ReactElement
  readOnly?: boolean

  validate?: (value: any) => string | null | undefined
  loading?: boolean
}

const Loader = () => {
  return (
    <InputAdornment position="end">
      <CircularProgress style={{ marginRight: 16, width: 30, height: 30 }} />
    </InputAdornment>
  )
}

const FormikTextField: React.FC<FormikTextFieldProps> = ({
  startAdornment,
  endAdornment,
  InputProps,
  required,
  validate,
  disabled,
  loading = false,
  ...props
}) => {
  const isDisabled = loading || disabled

  return (
    <Field
      component={TextField}
      {...props}
      disabled={isDisabled}
      required={isDisabled ? false : required}
      InputProps={{
        ...InputProps,
        startAdornment: !startAdornment ? null : (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: loading ? (
          <Loader />
        ) : endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : null,
      }}
      validate={(value: any) => {
        const emptyValue = value !== 0 && !value
        if (!isDisabled && required && emptyValue) return 'Required!'
        if (validate) return validate(value)
      }}
    />
  )
}
export default FormikTextField
