import React from 'react'
import { Field, useFormikContext, useField } from 'formik'
import { SimpleFileUpload } from 'formik-material-ui'

export const blackListedExt = [
  '.EXE',
  '.PIF',
  '.APPLICATION',
  '.GADGET',
  '.MSI',
  '.MSP',
  '.COM',
  '.SCR',
  '.HTA',
  '.CPL',
  '.MSC',
  '.JAR',
  '.BAT',
  '.CMD',
  '.VB',
  '.VBS',
  '.VBE',
  '.JS',
  '.JSE',
  '.WS',
  '.WSF',
  '.WSC',
  '.WSH',
  '.PS1',
  '.PS1XML',
  '.PS2',
  '.PS2XML',
  '.PSC1',
  '.PSC2',
  '.MSH',
  '.MSH1',
  '.MSH2',
  '.MSHXML',
  '.MSH1XML',
  '.MSH2XML',
  '.SCF',
  '.LNK',
  '.INF',
  '.REG',
]

export type FileFieldProps = {
  name: string
  label: string
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
}

const FileField: React.FC<FileFieldProps> = ({
  disabled,
  readOnly,
  required,
  label,
  ...props
}) => {
  const [, , helpers] = useField(props.name)

  const { isSubmitting } = useFormikContext()
  const isDisabled = disabled || isSubmitting || readOnly

  return (
    <Field
      {...props}
      label={required ? `${label}*` : label}
      validate={(file: any) => {
        if (!isDisabled && required && !file) return 'Required!'

        if (!file) return ''
        const { name, size } = file

        const extension = `.${
          name.split('.')[name.split('.').length - 1]
        }`.toUpperCase()
        if (blackListedExt.includes(extension))
          return 'File extension is not supported'

        if (size > 31457280) return 'Maximum file size is 30MB'
        if (size < 1) return 'Minimum file size is 1 byte'

        if (name.length > 60) return 'Maximum file name length is 60'
        if (name.length < 5) return 'Minimum file name length is 5'
      }}
      component={SimpleFileUpload}
      disabled={isDisabled}
      InputProps={{
        onClick: () => helpers.setTouched(true),
      }}
    />
  )
}
export default FileField
