import React from 'react'
import { connect } from 'react-redux'

import { isUserLoggedIn } from '../utils'
import NotLoggedIn from '../components/NotLoggedIn'
import LogIn from '../containers/logIn'

const AuthHOC = (requiredPermissions) => (Component) => {
    class Auth extends React.Component {
        render() {
            const currentUser = this.props.currentUser
            if (!isUserLoggedIn(currentUser)) {
                return <div>
                           <NotLoggedIn />
                           <LogIn />
                       </div>
            } else if (!requiredPermissions.every(p => currentUser.permissions.includes(p))) {
                return <div>You are not authorized for this page</div>
            } else {
                return <Component {...this.props} />
            }
        }
    }

    const mapStateToProps = (state) => {
        const { currentUser } = state
        return {
            currentUser
        }
    }

    return connect(mapStateToProps)(Auth)
}

export default AuthHOC