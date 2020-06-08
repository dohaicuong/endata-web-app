import React from 'react'
import ComboBoxField from '.'
import { Paper } from '@material-ui/core'
import { Formik, Form } from 'formik'

export default {
  title: 'Formik fields',
}

export const ComboBoxFieldStories = () => {
  return (
    <Paper style={{ padding: 16 }}>
      <Formik
        initialValues={{
          multi: '',
        }}
        onSubmit={values => {
          console.log(values)
        }}
        validate={values => {
          console.log(values)
        }}
      >
        <Form>
          <ComboBoxField
            label="multi"
            name="multi"
            multiple
            fullWidth
            variant="outlined"
            options={[
              { label: 'One', value: '1' },
              { label: 'Two', value: '2' },
              { label: 'Three', value: '3' },
              { label: 'Four', value: '4' },
            ]}
          />
        </Form>
      </Formik>
    </Paper>
  )
}
