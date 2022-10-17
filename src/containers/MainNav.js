import React from 'react'
import { Navigation } from '@mui/material/Navi'
import { connect } from 'react-redux'

import { isUserLoggedIn, isDev } from '../utils'
import RTButtonNavLink from '../components/RTButtonNavLink'

class MainNav extends React.Component {

    render() {
        const currentUser = this.props.currentUser
        const isLoggedIn = isUserLoggedIn(currentUser)

        return (
            <Navigation type='vertical'>
                <RTButtonNavLink to='/' label='Intro' />
                <RTButtonNavLink to='/contacts' label='Contacts' />
                <RTButtonNavLink to='/settings' label='Settings' />
                {isDev && <RTButtonNavLink to='/dev' >Dev</RTButtonNavLink>}
                {isLoggedIn && <RTButtonNavLink to='/userProfile' label={'Hi, ' + currentUser.name} />}
                {isLoggedIn && <RTButtonNavLink to='/logOut' label='Log out' />}
                {!isLoggedIn && <RTButtonNavLink to="/logIn" label='Log in' />}
            </Navigation>
        )
    }
}

const mapStateToProps = (state) => {
    const { currentUser } = state

    return {
        currentUser
    }
}

export default connect(mapStateToProps)(MainNav)
