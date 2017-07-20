import React from 'react';
import { Navigation } from 'react-toolbox/lib/navigation';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button'

import { isUserLoggedIn, withReactRouterLink, isDev } from '../utils'
const RTButtonLink = withReactRouterLink(Button);

const MainNav = (props) => {
    const currentUser = props.currentUser
    const isLoggedIn = isUserLoggedIn(currentUser)

    return (
        <Navigation type='vertical'>
            <RTButtonLink to='/'>Intro</RTButtonLink>
            <RTButtonLink to='/contacts' label='Contacts' />
            {isDev && <RTButtonLink to='/dev'>Dev</RTButtonLink>}
            {isLoggedIn && <RTButtonLink to='/userProfile' label={currentUser.name} />}
            {isLoggedIn && <RTButtonLink to='/logOut' label='Log out' />}
            {!isLoggedIn && <RTButtonLink to="/logIn" label='Log in' />}
        </Navigation>
    )
}

const mapStateToProps = (state) => {
    const { currentUser } = state;

    return {
        currentUser
    }
}

export default connect(mapStateToProps)(MainNav)