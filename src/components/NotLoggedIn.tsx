import React from 'react'

import LogIn from '../containers/LogIn'

const NotLoggedIn = (props) => <React.Fragment>
  <div>You are not logged in. Please Log in to continue.</div>
  <LogIn />
</React.Fragment>

export default NotLoggedIn
