
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { isUserLoggedIn } from '../utils'

class UserProfile extends React.Component {
    render() {
        const currentUser = this.props.currentUser
        const isLoggedIn = isUserLoggedIn(currentUser)
        const isLoggedInStr = isLoggedIn ? 'yes' : 'no'
        const iatStr = new Date(currentUser.iat * 1000).toString()
        const expStr = new Date(currentUser.exp * 1000).toString()

        return (
            <div>
                <div>isLoggedIn: {isLoggedInStr}</div>
                <div>Logged in at: {iatStr}</div>
                <div>Login expires(ed) at: {expStr}</div>
                {isLoggedIn && <Link to="/logOut">Log out</Link>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(UserProfile)