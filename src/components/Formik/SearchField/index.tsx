import React from 'react'

import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { useField, useFormikContext } from 'formik'
import { InputAdornment, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

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
      InputProps={{
        ...InputProps,
        startAdornment: !startAdornment ? null : (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setFormikValue(value)}>
              <SearchIcon />
            </IconButton>
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
