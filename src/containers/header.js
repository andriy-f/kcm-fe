import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button'
import { withRouter } from 'react-router-dom'

import appStyle from '../App.css'
import logo from '../logo.svg';
import { isUserLoggedIn, withReactRouterLink } from '../utils'
const RTButtonLink = withReactRouterLink(Button);

const Header = (props) => {
    const currentUser = props.currentUser
    const isLoggedIn = isUserLoggedIn(currentUser)

    return (
        <header className="App-header">
            <AppBar title='K Contact Manager' leftIcon='menu' rightIcon={<img src={logo} className={appStyle.logo} alt="logo" />}>
                <Navigation type='horizontal'>
                    <RTButtonLink to='/'>Intro</RTButtonLink>
                    <RTButtonLink to='/contacts' label='Contacts' />
                    {isLoggedIn ?
                        <span>
                            <RTButtonLink to='/userProfile' label={currentUser.name} />
                            <RTButtonLink to='/logOut' label='Log out' />
                        </span>
                        :
                        <RTButtonLink to="/logIn" label='Log in' />
                    }
                </Navigation>
            </AppBar>
        </header>
    )
}

const mapStateToProps = (state) => {
    const { currentUser } = state;

    return {
        currentUser
    }
};

export default withRouter(connect(mapStateToProps)(Header));