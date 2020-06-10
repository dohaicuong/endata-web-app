import React from 'react'
import TextField from 'components/Formik/TextField'
import { Grid } from '@material-ui/core'

const renderField = ({
  component = TextField,
  xs = 6,
  md = 3,
  unMountOn = false,
  variant,
  ...props
}: any) => {
  const Comp = component

  return (
    <Grid item xs={xs} md={md} key={props.name}>
      {!unMountOn && (
        <Comp {...props} fullWidth variant={variant || 'outlined'} />
      )}
    </Grid>
  )
}
export default renderField
