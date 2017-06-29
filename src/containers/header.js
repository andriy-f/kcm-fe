import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import { isUserLoggedIn } from '../utils'

const Header = (props) => {
    const currentUser = props.currentUser
    const isLoggedIn = isUserLoggedIn(currentUser)

    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>K Contact Manager React</h2>
            <ul className="App-nav">
                <li>
                    <Link to="/">Intro</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                {isLoggedIn ?
                    <li>Hello, <Link to="/userProfile">{currentUser.name}</Link></li>
                    :
                    <li><Link to="/logIn">Log in</Link></li>
                }
                {isLoggedIn && <li><Link to="/logOut">Log out</Link></li>}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { currentUser } = state;

    return {
        currentUser
    }
};

export default connect(mapStateToProps)(Header)