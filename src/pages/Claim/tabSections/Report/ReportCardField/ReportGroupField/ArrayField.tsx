import React from 'react'
import { FieldArrayRenderProps } from 'formik'
import {
  Button,
  makeStyles,
  Divider,
  Grid,
  IconButton,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ArrayField_data$key } from './__generated__/ArrayField_data.graphql'
import ReportTextField from '../ReportTextField'
import ReportInfoField from '../ReportInfoField'
import ReportTextAreaField from '../ReportTextAreaField'
import ReportSelectField from '../ReportSelectField'
import ReportDateTimeField from '../ReportDateTimeField'

export type ArrayFieldProps = {
  fieldArrayHelpers: FieldArrayRenderProps
  data: ArrayField_data$key | null
}
const ArrayField: React.FC<ArrayFieldProps> = props => {
  const classes = useStyles()
  const data = useFragment(
    graphql`
      fragment ArrayField_data on GroupField {
        label
        name
        fields {
          __typename
          label
          grid
          ...ReportInfoField_field
          ...ReportTextField_field
          ...ReportTextAreaField_field
          ...ReportSelectField_field
          ...ReportDateTimeField_field
        }
      }
    `,
    props.data
  )

  if (!data?.name) return null

  const fieldArray = props.fieldArrayHelpers.form.values[data.name]
  // const defaultValue = data.fields
  //   ?.map(field => field.name)
  //   .reduce((total, current) => {
  //     if (!current) return total
  //     // @ts-ignore
  //     total[current] = ''
  //     return total
  //   }, {})

  const addFieldHandle = () => {
    props.fieldArrayHelpers.insert(fieldArray ? fieldArray.length : 0, {})
  }
  const removeFieldHandle = (index: number) => {
    props.fieldArrayHelpers.remove(index)
  }
  const renderField = (field: any, index: number) => {
    switch (field.__typename) {
      case 'InfoField':
        return <ReportInfoField field={field} />
      case 'TextField':
        return (
          <ReportTextField
            field={field}
            parentFieldName={`${data.name}[${index}]`}
          />
        )
      case 'TextAreaField':
        return (
          <ReportTextAreaField
            field={field}
            parentFieldName={`${data.name}[${index}]`}
          />
        )
      case 'SelectField':
        return (
          <ReportSelectField
            field={field}
            parentFieldName={`${data.name}[${index}]`}
          />
        )
      case 'DateTimeField':
        return (
          <ReportDateTimeField
            field={field}
            parentFieldName={`${data.name}[${index}]`}
          />
        )
      default:
        console.log(field.__typename)
        return <>{field.label}</>
    }
  }

  return (
    <>
      {/* // @ts-ignore */}
      {/* {console.log(fieldArrayHelpers.form.values[field.name])} */}
      <Button
        variant="outlined"
        color="primary"
        size="large"
        startIcon={<AddIcon />}
        className={classes.button}
        onClick={addFieldHandle}
      >
        {data.label}
      </Button>
      {fieldArray?.map((field: any, index: number) => (
        <>
          <Divider style={{ marginTop: 8 }} />
          <Grid container spacing={2} key={index}>
            <Grid
              item
              xs={12}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <IconButton onClick={() => removeFieldHandle(index)}>
                <ClearIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              {data.fields?.map(field => {
                const grid = field.grid as any
                return (
                  <Grid item xs={grid}>
                    {renderField(field, index)}
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </>
      ))}
    </>
  )
}
export default ArrayField

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: theme.spacing(),
  },
}))
