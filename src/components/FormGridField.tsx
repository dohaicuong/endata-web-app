import React from 'react'
import { Grid } from '@material-ui/core'

type FormGridFieldProps = {
  xs?: any
  md?: any
  unMountOn?: boolean
  variant?: string
  component: any
  flex?: boolean
}
const FormGridField: React.FC<FormGridFieldProps> = ({
  xs = 6,
  md = 3,
  unMountOn = false,
  flex = false,
  variant = 'outlined',
  component,
}) => {
  return (
    <Grid item xs={xs} md={md} style={flex ? { display: 'flex' } : {}}>
      {!unMountOn
        ? React.cloneElement(component, {
            fullWidth: true,
            variant,
          })
        : ''}
    </Grid>
  )
}
export default FormGridField
