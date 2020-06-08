import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { ReportFileField_field$key } from './__generated__/ReportFileField_field.graphql'

import { TextField } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import useUppy from 'hooks/useUppy'
import DashboardModal from '@uppy/react/lib/DashboardModal'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import { useFormikContext, useField } from 'formik'

export type ReportFileFieldProps = {
  field: ReportFileField_field$key | null
  parentFieldName?: string
}
const ReportFileField: React.FC<ReportFileFieldProps> = props => {
  const field = useFragment(
    graphql`
      fragment ReportFileField_field on FileField {
        label
        name
      }
    `,
    props.field
  )
  const fieldName = field?.name ?? ''
  const name = props.parentFieldName
    ? `${props.parentFieldName}.${fieldName}`
    : fieldName

  const { uppy, files } = useUppy({
    meta: { type: 'avatar' },
    restrictions: {
      maxFileSize: 1000000,
      maxNumberOfFiles: 3,
      minNumberOfFiles: 1,
      // allowedFileTypes: ['image/*', 'video/*']
    },
    autoProceed: false,
  })
  const uppyAddFile = React.useCallback(uppy?.addFile, [uppy?.addFile])

  const { setFieldValue, isSubmitting } = useFormikContext()
  const isDisabled = isSubmitting // || disabled

  const [formikField] = useField(name)
  const defaultFiles = formikField.value
    ? formikField.value.map(({ name, url }: any) => ({ name, url }))
    : null
  React.useEffect(() => {
    if (defaultFiles && uppyAddFile) {
      defaultFiles.forEach(({ name, url }: any) => {
        fetch(url)
          .then(res => res.blob())
          .then(blob => {
            uppyAddFile({
              id: url,
              name,
              type: blob.type,
              data: blob,
            })
          })
      })
    }
    // eslint-disable-next-line
  }, [uppyAddFile])

  const defaultValue = formikField.value
    ? formikField.value.map(({ name }: any) => name).join(', ')
    : ''
  const [textValue, setTextValue] = React.useState(defaultValue)
  React.useEffect(() => {
    if (files && files.length) {
      setFieldValue(name, files)
      const value = files.map(({ name }) => name).join(', ')
      setTextValue(value)
    }
  }, [files, name, setFieldValue])

  const [modalOpen, setModalOpen] = React.useState(false)
  const handleOpen = () => !isDisabled && setModalOpen(!isSubmitting)
  const handleClose = () => setModalOpen(false)

  if (!field || !uppy) return null

  return (
    <>
      <TextField
        label={field.label}
        fullWidth
        variant="outlined"
        value={textValue}
        onClick={handleOpen}
        disabled={isDisabled}
        placeholder="Click to upload files"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleOpen} disabled={isDisabled}>
                <CloudUploadIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <DashboardModal
        uppy={uppy}
        closeModalOnClickOutside
        open={modalOpen}
        onRequestClose={handleClose}
      />
    </>
  )
}
export default ReportFileField
