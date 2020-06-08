import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ReportCardField_field$key } from './__generated__/ReportCardField_field.graphql'
import ReportTextField from './ReportTextField'
import ReportTextAreaField from './ReportTextAreaField'
import ReportInfoField from './ReportInfoField'
import ReportSelectField from './ReportSelectField'
import ReportDateTimeField from './ReportDateTimeField'
import ReportGroupField from './ReportGroupField'
import ReportFileField from './ReportFileField'

export type ReportCardFieldProps = {
  field: ReportCardField_field$key | null
}
const ReportCardField: React.FC<ReportCardFieldProps> = props => {
  const field = useFragment(
    graphql`
      fragment ReportCardField_field on Field {
        __typename
        label
        ...ReportInfoField_field
        ...ReportTextField_field
        ...ReportTextAreaField_field
        ...ReportSelectField_field
        ...ReportDateTimeField_field
        ...ReportGroupField_field
        ...ReportFileField_field
      }
    `,
    props.field
  )

  if (!field) return null
  switch (field.__typename) {
    case 'InfoField':
      return <ReportInfoField field={field} />
    case 'TextField':
      return <ReportTextField field={field} />
    case 'TextAreaField':
      return <ReportTextAreaField field={field} />
    case 'SelectField':
      return <ReportSelectField field={field} />
    case 'DateTimeField':
      return <ReportDateTimeField field={field} />
    case 'GroupField':
      return <ReportGroupField field={field} />
    case 'FileField':
      return <ReportFileField field={field} />
    default:
      console.log(field.__typename)
      return <>{field.label}</>
  }
}
export default ReportCardField
