import React from 'react'

import { Field, useField } from 'formik'
import { DatePicker } from 'formik-material-ui-pickers' // DatePickerProps
// import { DatePickerProps } from '@material-ui/pickers'
import { InputAdornment } from '@material-ui/core'

// export type DateFieldProps = Omit<DatePickerProps, 'variant'>
// & {
//   name: string

//   variant?: 'standard' | 'outlined' | 'filled'
//   startAdornment?: React.ReactElement
//   endAdornment?: React.ReactElement,
// }

const DateField: React.FC<any> = ({
  variant = 'standard',
  startAdornment,
  endAdornment,
  ...props
}) => {
  const [, , { setValue }] = useField(props.name)

  React.useEffect(() => {
    if (props.defaultValue) setValue(props.defaultValue)
    // eslint-disable-next-line
  }, [props.defaultValue])

  return (
    <Field
      component={DatePicker}
      {...props}
      variant="dialog"
      clearable
      inputVariant={variant}
      format="dd/MM/yyyy"
      placeholder="DD/MM/YYYY"
      InputProps={{
        ...props.InputProps,
        startAdornment: !startAdornment ? null : (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: !endAdornment ? null : (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
    />
  )
}
export default DateField
