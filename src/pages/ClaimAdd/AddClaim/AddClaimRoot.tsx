import React from 'react'
import CustomerDetailsCard from './CustomerDetailsCard'
import { Container } from '@material-ui/core'

const AddClaimRoot = () => {
  return (
    <Container maxWidth="xl" style={{ marginTop: 8 }}>
      <CustomerDetailsCard />
    </Container>
  )
}
export default AddClaimRoot
