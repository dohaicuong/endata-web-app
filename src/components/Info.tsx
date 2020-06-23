import React from 'react'

import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { makeStyles, InputAdornment } from '@material-ui/core'

export type FormikInfoFieldProps = TextFieldProps & {
  startAdornment?: React.ReactElement
  labelProps?: any
}

const FormikInfoField: React.FC<FormikInfoFieldProps> = ({
  InputProps,
  rowsMax = 3,
  className,
  startAdornment,
  labelProps,
  variant, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...props
}) => {
  const classes = useStyles()

  return (
    <TextField
      {...props}
      className={`${className} ${classes.root}`}
      multiline
      rowsMax={rowsMax}
      InputProps={{
        ...InputProps,
        readOnly: true,
        startAdornment: !startAdornment ? null : (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
      }}
      InputLabelProps={{ shrink: true, ...labelProps }}
    />
  )
}
export default FormikInfoField

const useStyles = makeStyles({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline.Mui-focused:after': {
      transform: 'scaleX(0)',
    },
  },
})
