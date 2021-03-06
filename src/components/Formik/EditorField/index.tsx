import React from 'react'

import { useField, useFormikContext } from 'formik'
import RichTextEditor from 'react-rte'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

const EditorField = ({ name, label, placeholder, disabled, ...props }: any) => {
  const { isSubmitting } = useFormikContext()

  const [field, meta, helpers] = useField(name)
  const { error, touched } = meta
  const isError = Boolean(touched && error)
  const fieldValue = React.useMemo(() => field.value, [field.value])

  const initialValue = fieldValue
    ? RichTextEditor.createValueFromString(fieldValue, 'html')
    : RichTextEditor.createEmptyValue()
  const [value, setValue] = React.useState<any>(initialValue)

  React.useEffect(() => {
    if (!touched && fieldValue) {
      setValue(RichTextEditor.createValueFromString(fieldValue, 'html'))
    }
  }, [fieldValue, touched])

  return (
    <FormControl error={isError} style={{ width: '100%' }} id={field.name}>
      <RichTextEditor
        {...props}
        disabled={disabled || isSubmitting}
        placeholder={placeholder || label}
        toolbarConfig={{
          display: [
            'INLINE_STYLE_BUTTONS',
            'BLOCK_TYPE_BUTTONS',
            'BLOCK_TYPE_DROPDOWN',
            'HISTORY_BUTTONS',
          ],
          INLINE_STYLE_BUTTONS: [
            { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
            { label: 'Italic', style: 'ITALIC' },
            { label: 'Underline', style: 'UNDERLINE' },
          ],
          BLOCK_TYPE_DROPDOWN: [
            { label: 'Normal', style: 'unstyled' },
            { label: 'Heading Large', style: 'header-one' },
            { label: 'Heading Medium', style: 'header-two' },
            { label: 'Heading Small', style: 'header-three' },
          ],
          BLOCK_TYPE_BUTTONS: [
            { label: 'UL', style: 'unordered-list-item' },
            { label: 'OL', style: 'ordered-list-item' },
          ],
        }}
        value={value}
        onChange={(value: any) => {
          setValue(value)
          helpers.setValue(value.toString('html'))
          helpers.setTouched(true)
        }}
      />
      {isError && (
        <FormHelperText style={{ marginLeft: 14, marginRight: 14 }}>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  )
}
export default EditorField
