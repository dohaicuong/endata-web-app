import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { TextField, makeStyles } from '@material-ui/core'
import { ReportInfoField_field$key } from './__generated__/ReportInfoField_field.graphql'

export type ReportInfoFieldProps = {
  field: ReportInfoField_field$key | null
}
const ReportInfoField: React.FC<ReportInfoFieldProps> = props => {
  const classes = useStyles()
  const field = useFragment(
    graphql`
      fragment ReportInfoField_field on InfoField {
        label
        value
      }
    `,
    props.field
  )

  if (!field) return null
  return (
    <TextField
      fullWidth
      multiline
      label={field.label}
      defaultValue={field.value}
      InputProps={{ readOnly: true }}
      className={classes.root}
    />
  )
}
export default ReportInfoField

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
