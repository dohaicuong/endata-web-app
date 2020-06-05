import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { ReportGroupField_field$key } from './__generated__/ReportGroupField_field.graphql'
import { FieldArray } from 'formik'
// import { makeStyles } from '@material-ui/core'
import ArrayField from './ArrayField'

export type ReportGroupFieldProps = {
  field: ReportGroupField_field$key | null
}
const ReportGroupField: React.FC<ReportGroupFieldProps> = props => {
  // const classes = useStyles()
  const field = useFragment(
    graphql`
      fragment ReportGroupField_field on GroupField {
        label
        name
        ...ArrayField_data
      }
    `,
    props.field
  )

  if (!field || !field?.name) return null
  return (
    <FieldArray
      name={field.name}
      render={fieldArrayHelpers => (
        <ArrayField data={field} fieldArrayHelpers={fieldArrayHelpers} />
      )}
    />
  )
}
export default ReportGroupField

// const useStyles = makeStyles(theme => ({
//   groupRoot: {
//     marginBottom: 8,
//   },
//   groupHeader: {
//     margin: 0,
//     textAlign: 'right',
//   },
//   fieldRoot: {
//     marginTop: theme.spacing(),
//     marginBottom: theme.spacing(2),
//   },
// }))
