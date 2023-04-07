import React from 'react'

import Alert from '@mui/material/Alert'
import Container from '@mui/material/Container'

const NotAuthorized = () => (
  <Container maxWidth='sm'>
    <Alert variant='filled' severity='error'>
      You are not authorized to access this page
    </Alert>
  </Container>
)

export default NotAuthorized
