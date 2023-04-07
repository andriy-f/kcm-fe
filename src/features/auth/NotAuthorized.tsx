import React from 'react'

import { Link as RRLink } from 'react-router-dom'

import Alert from '@mui/material/Alert'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'

const NotAuthorized = () => (
  <Container maxWidth='sm'>
    <Alert variant='filled' severity='error'>
      You are not authorized to access this page
    </Alert>
    <MuiLink component={RRLink} to='/'>Home</MuiLink>
  </Container>
)

export default NotAuthorized
