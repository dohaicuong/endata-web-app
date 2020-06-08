import React from 'react'

import TextField, { FormikTextFieldProps } from 'components/Formik/TextField'
import { makeStyles } from '@material-ui/core'

export type FormikInfoFieldProps = FormikTextFieldProps

const FormikInfoField: React.FC<FormikInfoFieldProps> = ({
  InputProps,
  rowsMax = 3,
  className,
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
  },
})
