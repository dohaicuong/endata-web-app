import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { Container } from '@material-ui/core'

const TabLoading: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: 16 }}>
      <Skeleton animation="wave" variant="text" />
      <Skeleton animation="wave" variant="circle" width={80} height={80} />
      <Skeleton animation="wave" variant="rect" width="100%" height={118} />
    </Container>
  )
}
export default TabLoading
