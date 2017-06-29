
import React from 'react';
import { connect } from 'react-redux';

import { requestAuthenticate } from '../actions';

class LogIn extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.initAuthenticate(this.loginInput.value, this.passwordInput.value);
    }

    render() {
        const error = this.props.authenticationPage.error;
        const errorResp = error && error.xhr.response;
        const errorMessage = errorResp && errorResp.message;
        return (
            <div className="authenticate">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        {errorMessage}
                    </div>
                    <div>
                        <label htmlFor="kcm-authenticate-login">Login</label>
                        <input id="kcm-authenticate-login" type="text" name="login" ref={(input) => this.loginInput = input} />
                    </div>
                    <div>
                        <label htmlFor="kcm-authenticate-password">Password</label>
                        <input id="kcm-authenticate-password" type="password" name="password" ref={(input) => this.passwordInput = input} />
                    </div>
                    <div>
                        <input type="submit" value="Log in" />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { currentUser, authenticationPage } = state;

    return {
        currentUser,
        authenticationPage
    }
};

const mapDispatchToProps = (dispatch) => ({
    initAuthenticate: (login, password) => dispatch(requestAuthenticate(login, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);