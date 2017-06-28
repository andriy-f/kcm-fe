import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../logo.svg';

const Header = () => {
    // const currentUser = this.props.currentUser
    // const isLoggedIn = !!currentUser

    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>K Contact Manager React</h2>
            <ul className="App-nav">
                <li>
                    <Link to="/">Intro</Link>
                </li>
                <li>
                    <Link to="/authorize">Authorize</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                {/*<li>
                    {isLoggedIn ? (
                        <span>Hello, </span>
                    ) : (
                            <span>Login</span>
                        )}
                </li>*/}
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