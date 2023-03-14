import Alert from '@mui/material/Alert'
import React from 'react'

import LogIn from './LoginPage'

const NotLoggedIn = () => (
  <>
    <Alert severity="info">You are not logged in. Please Log in to continue.</Alert>
    <LogIn />
  </>
)

export default NotLoggedIn
