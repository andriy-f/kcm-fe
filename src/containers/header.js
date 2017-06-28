import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../logo.svg';

const Header = (props) => {
    const currentUser = props.currentUser
    const isLoggedIn = Object.keys(currentUser).length !== 0

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
                <li>
                    {isLoggedIn ? (
                        <span>Hello, {currentUser.name}</span>
                    ) : (
                            <Link to="/authorize">Login</Link>
                        )}
                </li>
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