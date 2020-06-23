import React from 'react'

import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { useField, useFormikContext } from 'formik'
import { InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

export type FormikSearchFieldProps = TextFieldProps & {
  name: string
  startAdornment?: React.ReactElement
  endAdornment?: React.ReactElement

  // validate?: (value: any) => string | null | undefined
}

const SearchField: React.FC<FormikSearchFieldProps> = ({
  name,
  startAdornment,
  // endAdornment,
  InputProps,
  required,
  disabled,
  // validate,
  ...props
}) => {
  const { isSubmitting } = useFormikContext()
  const [field, , helpers] = useField(name)
  const isDisabled = isSubmitting || disabled

  const [value, setValue] = React.useState(field.value)
  const setFormikValue = (value: any) => {
    helpers.setValue(value)
  }

  return (
    <TextField
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyPress={e => {
        if (e.key === 'Enter') setFormikValue(value)
      }}
      disabled={disabled}
      required={isDisabled ? false : required}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        ...InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Button
              color="primary"
              variant="contained"
              onClick={() => setFormikValue(value)}
            >
              Go
            </Button>
          </InputAdornment>
        ),
      }}
      // validate={(value: any) => {
      //   if (!isDisabled && required && !value) return 'Required!'
      //   if (validate) return validate(value)
      // }}
    />
  )
}
export default SearchField
