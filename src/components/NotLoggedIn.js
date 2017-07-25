import React from 'react'

import RTButtonLink from './RTButtonLink'

const NotLoggedIn = (props) => (
    <div>You are not logged in. Please <RTButtonLink to="/logIn">Log in</RTButtonLink> to continue.</div>
)

export default NotLoggedIn