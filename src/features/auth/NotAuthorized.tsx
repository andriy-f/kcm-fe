import React from 'react'

import { Link as RRLink } from 'react-router-dom'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import MuiLink from '@mui/material/Link'

import { logoutPath } from '../../components/paths'

const NotAuthorized = () => (
  <Container maxWidth='sm'>
    <Alert variant='filled' severity='error'>
      You are not authorized to access this page, but you can login with another account.
    </Alert>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        mt: 2,
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
    >
      <MuiLink component={RRLink} to='/'>Home</MuiLink>
      <MuiLink component={RRLink} to={'/' + logoutPath}>Logout</MuiLink>
    </Box>
  </Container>
)

export default NotAuthorized
