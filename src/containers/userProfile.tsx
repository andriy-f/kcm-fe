
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { isUserLoggedIn } from '../utils'

interface CurrentUser {
  tokenExpiresOn: number
}
interface UserProfileProps {
    currentUser: CurrentUser
}

class UserProfile extends React.Component<UserProfileProps> {
    render() {
        const currentUser = this.props.currentUser
        const isLoggedIn = isUserLoggedIn(currentUser)
        const isLoggedInStr = isLoggedIn ? 'yes' : 'no'
        const expStr = new Date(currentUser.tokenExpiresOn).toString()

        return (
            <div>
                <div>isLoggedIn: {isLoggedInStr}</div>
                <div>Login expires(ed) at: {expStr}</div>
                {isLoggedIn && <Link to="/logOut">Log out</Link>}
            </div>
        )
    }
}

interface userProfileState {
  currentUser: CurrentUser
}

const mapStateToProps = (state: userProfileState) => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(UserProfile)
