import React from 'react'
import {
  FormControl,
  makeStyles,
  FormGroup,
  FormLabel,
  FormHelperText,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import { useField, useFormikContext } from 'formik'

export type CheckboxGroupFieldProps = {
  name: string
  label?: string
  options?: Option[] | null
  disabled?: boolean
  readOnly?: boolean

  display?: 'grid' | 'flex'
  color?: 'primary' | 'secondary' | 'default'
  maxHeight?: string
}
export type Option = {
  label?: string
  value: string
}
const CheckboxGroupField: React.FC<CheckboxGroupFieldProps> = ({
  name,
  label,
  options,
  disabled = false,
  readOnly = false,
  display = 'grid',
  color = 'primary',
  maxHeight = '100%',
}) => {
  const classes = useStyles()

  const { isSubmitting } = useFormikContext()
  const [field, meta, { setValue }] = useField(name)

  const { error, touched } = meta
  const isError = Boolean(touched && error)

  const fieldValue = field.value
  const fieldValueString = JSON.stringify(fieldValue)
  const optionsString = JSON.stringify(options)
  const currentState: any = React.useMemo(
    () =>
      options?.map(({ label, value }) => ({
        label,
        id: value,
        value: fieldValue?.includes(value) ?? '',
      })),
    // TODO
    // eslint-disable-next-line
    [fieldValueString, optionsString]
  )

  const handleChange = (value: any) => {
    const newState = currentState.map((s: any) => {
      if (s.id === value) return { ...s, value: !s.value }
      return s
    })
    const newFieldValue = newState
      .filter(({ value }: any) => value)
      .map(({ id }: any) => id)
    setValue(newFieldValue)
  }

  return (
    <div style={{ maxHeight, overflow: 'auto' }}>
      <FormControl
        component="fieldset"
        className={classes.root}
        error={isError}
        disabled={isSubmitting || disabled || readOnly}
      >
        <FormLabel component="legend" className={classes.label}>
          {label}
        </FormLabel>
        <FormGroup row className={classes.root} style={{ display: display }}>
          {options?.map(({ label, value }) => (
            <FormControlLabel
              key={value}
              label={label}
              control={
                <Checkbox
                  {...field}
                  value={value}
                  checked={fieldValue?.includes(value) ?? false}
                  onChange={() => handleChange(value)}
                  disabled={isSubmitting || disabled || readOnly}
                  color={color}
                />
              }
            />
          ))}
        </FormGroup>
        {isError && (
          <FormHelperText className={classes.helperText}>
            {String(error)}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  )
}
export default CheckboxGroupField
const useStyles = makeStyles({
  root: {
    width: '100%',
    // display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    transform: 'scale(0.75)',
  },
  switch: {
    marginLeft: 'calc(50% - 31px)',
  },
  helperText: {
    marginLeft: 14,
    marginRight: 14,
  },
})
