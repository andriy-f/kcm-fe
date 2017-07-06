import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-toolbox/lib/button'
import { Input } from 'react-toolbox/lib/input'
import { Field, reduxForm } from 'redux-form'

import { kFormContainer, kTextCenter } from '../App.css'
import { requestAuthenticate } from '../actions'
import { isUserLoggedIn } from '../utils'

const LoginInput = ({ input: { value, onChange } }) => <Input type='text' label='Login' value={value} onChange={onChange} />
const PasswordInput = ({ input: { value, onChange } }) => <Input type='password' label='Password' value={value} onChange={onChange} />

const LoginForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <h3 className={kTextCenter}>Log into site</h3>
            <Field name='login' component={LoginInput} />
            <Field name='password' component={PasswordInput} />
            <div className={kTextCenter}>
                <Button label="Log in" type="submit" flat />
            </div>
        </form>
    )
}

const LoginFormReduxed = reduxForm({
    form: 'logIn'
})(LoginForm)

class LogIn extends React.Component {
    handleSubmit = (values) => {
        this.props.initAuthenticate(values.login, values.password)
    }

    render() {
        const currentUser = this.props.currentUser
        const isLoggedIn = isUserLoggedIn(currentUser)
        const error = this.props.authenticationPage.error
        const errorResp = error && error.xhr.response
        const errorMessage = errorResp && errorResp.message

        return isLoggedIn ? (
            <Redirect to="/" />
        ) : (
                <div className={kFormContainer}>
                    <LoginFormReduxed onSubmit={this.handleSubmit} />
                    <div>
                        {errorMessage}
                    </div>
                </div >
            )
    }
}

const mapStateToProps = (state) => {
    const { currentUser, authenticationPage } = state;

    return {
        currentUser,
        authenticationPage
    }
}

const mapDispatchToProps = (dispatch) => ({
    initAuthenticate: (login, password) => dispatch(requestAuthenticate(login, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)