import React from 'react'

import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { makeStyles, InputAdornment } from '@material-ui/core'

export type FormikInfoFieldProps = TextFieldProps & {
  startAdornment?: React.ReactElement
}

const FormikInfoField: React.FC<FormikInfoFieldProps> = ({
  InputProps,
  rowsMax = 3,
  className,
  startAdornment,
  variant, // eslint-disable-line @typescript-eslint/no-unused-vars
  fullWidth,
  ...props
}) => {
  const classes = useStyles()

  return (
    <TextField
      {...props}
      className={`${className} ${classes.root}`}
      multiline
      rowsMax={rowsMax}
      fullWidth={fullWidth}
      InputProps={{
        ...InputProps,
        readOnly: true,
        startAdornment: !startAdornment ? null : (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
      }}
      InputLabelProps={{ shrink: true }}
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
