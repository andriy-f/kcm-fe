import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import { Link as RTLink } from 'react-toolbox/lib/link';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import { isUserLoggedIn } from '../utils'

const Header = (props) => {
    const currentUser = props.currentUser
    const isLoggedIn = isUserLoggedIn(currentUser)

    return (
        <header className="App-header">
            <AppBar title='K Contact Manager' leftIcon='menu' rightIcon={<img src={logo} className="App-logo" alt="logo" />}>
                <Navigation type='horizontal'>
                    <Link to="/">Intro</Link>
                    <Link to="/contacts">Contacts</Link>
                    {isLoggedIn ?
                        <span>Hello, <Link to="/userProfile">{currentUser.name}</Link></span>
                        :
                        <Link to="/logIn">Log in</Link>
                    }
                    {isLoggedIn && <Link to="/logOut">Log out</Link>}
                    <RTLink href='http://goo.gl' active label='Profile' icon='person' />
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

export default connect(mapStateToProps)(Header)