import React from 'react'
import { Formik, Form } from 'formik'
import AddClaimRoot from './AddClaimRoot'

const AddClaim = () => {
  return (
    <Formik
      initialValues={{}}
      validateOnChange={false}
      validate={values => ({})}
      onSubmit={values => {
        console.log(values)
      }}
    >
      <Form>
        <AddClaimRoot />
      </Form>
    </Formik>
  )
}
export default AddClaim
