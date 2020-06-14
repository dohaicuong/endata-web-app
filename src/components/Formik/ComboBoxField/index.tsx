// @ts-nocheck
import React from 'react'

import { useField, useFormikContext } from 'formik'
import Autocomplete from '@material-ui/lab/Autocomplete' // , { AutocompleteProps }
import {
  TextField,
  Checkbox,
  TextFieldProps,
  CircularProgress,
} from '@material-ui/core' // InputAdornment
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'

export type ComboBoxFieldProps =
  // AutocompleteProps &
  TextFieldProps & {
    startAdornment?: React.ReactElement
    options?: ComboBoxFieldOption[]
    name: string
    multiple?: boolean
    readOnly?: boolean
    loading?: boolean
  }
export type ComboBoxFieldOption = {
  label?: string
  value: string
  group?: string
}
const ComboBoxField: React.FC<ComboBoxFieldProps> = ({
  options = [],
  name,
  multiple = false,
  disabled,
  readOnly,
  fullWidth,
  loading,
  startAdornment,
  ...props
}) => {
  const { isSubmitting } = useFormikContext()

  const [field, meta, helpers] = useField(name)
  const [value, setValue] = React.useState<any>('')
  const fieldValue = field.value
  const optionString = JSON.stringify(options)
  React.useEffect(() => {
    if (options && options.length) {
      // TODO
      const currentValue = multiple
        ? // eslint-disable-next-line
        options.filter(option => fieldValue.includes(option.value))
        : // eslint-disable-next-line
        options.find(option => option.value == fieldValue)

      setValue(currentValue)
    }
    // eslint-disable-next-line
  }, [fieldValue, multiple, optionString]) // optionString
  const handleValueChange = (e: any, selected: any) => {
    if (!selected) return helpers.setValue('')

    const value = !multiple ? selected.value : selected.map((x: any) => x.value)
    helpers.setValue(value)
  }

  const { error, touched } = meta
  const isError = Boolean(touched && error)

  React.useEffect(() => {
    if (props.defaultValue) {
      const currentOption = options.find(option => {
        return String(option.value) === String(props.defaultValue)
      })

      const option: any = multiple ? [currentOption] : currentOption
      if (!option) return null
      setValue(option)

      const formValue = !multiple
        ? option.value
        : option.map((x: any) => x.value)
      helpers.setValue(formValue)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Autocomplete
      {...props}
      value={value}
      onChange={handleValueChange}
      disabled={loading || disabled || readOnly || isSubmitting}
      multiple={multiple}
      disableCloseOnSelect={multiple}
      filterSelectedOptions={!multiple}
      options={options}
      getOptionLabel={(option: any) => option.label || ''}
      groupBy={(option: any) => option.group}
      renderInput={params => {
        const mappedStartAdornment = multiple
          ? params.InputProps.startAdornment
          : startAdornment
          ? startAdornment
          : null

        const mappedEndAdornment = loading ? (
          <CircularProgress style={{ width: 30, height: 30 }} />
        ) : (
          params.InputProps.endAdornment
        )

        return (
          <TextField
            error={isError}
            helperText={isError ? error : null}
            fullWidth={fullWidth}
            {...props}
            {...params}
            InputProps={{
              ...params.InputProps,
              style: { flexWrap: 'nowrap' },
              startAdornment: mappedStartAdornment,
              endAdornment: mappedEndAdornment,
            }}
          />
        )
      }}
      renderTags={(value: any) => {
        const label = value.map(({ label }: any) => label).join(', ')

        return (
          <p
            style={{
              margin: 0,
              paddingLeft: 6,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {label}
          </p>
        )
      }}
      renderOption={(option: any, { selected }) => (
        <React.Fragment key={option.value}>
          {multiple && (
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              style={{ marginRight: 8 }}
              checked={selected}
            />
          )}
          {option.label}
        </React.Fragment>
      )}
    />
  )
}
export default ComboBoxField
