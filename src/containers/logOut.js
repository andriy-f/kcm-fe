import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logOff } from '../actions';
import { isUserLoggedIn } from '../utils'

class LogOut extends React.Component {
    componentDidMount() {
        this.props.initiateLogoff();
    }

    render() {
        const currentUser = this.props.currentUser
        const isLoggedIn = isUserLoggedIn(currentUser)

        return isLoggedIn ? (
            <span>Logging out...</span>
        ) : (
                <Redirect to="/" />
            )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    initiateLogoff: () => dispatch(logOff())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogOut)