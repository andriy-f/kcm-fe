import React from 'react'
import { Button } from 'react-toolbox/lib/button'

import { withReactRouterLink } from '../utils'

const RTButtonLink = withReactRouterLink(Button);

const NotLoggedIn = (props) => (
    <div>You are not logged in. Please <RTButtonLink to="/logIn">Log in</RTButtonLink> to continue.</div>
)

export default NotLoggedIn