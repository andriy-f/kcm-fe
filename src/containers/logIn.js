import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button'
import { kFormContainer, kTextCenter } from '../App.css'
import { Grid, Row, Col } from 'react-flexbox-grid';

import { requestAuthenticate } from '../actions';
import { isUserLoggedIn } from '../utils'

class LogIn extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.initAuthenticate(this.loginInput.value, this.passwordInput.value);
    }

    render() {
        const currentUser = this.props.currentUser
        const isLoggedIn = isUserLoggedIn(currentUser)
        const error = this.props.authenticationPage.error;
        const errorResp = error && error.xhr.response;
        const errorMessage = errorResp && errorResp.message;

        return isLoggedIn ? (
            <Redirect to="/" />
        ) : (
                <div className={kFormContainer}>
                    <form onSubmit={this.handleSubmit}>
                        <h3 className={kTextCenter}>Log into site</h3>
                        <div>
                            {errorMessage}
                        </div>
                        <Grid fluid>
                            <Row>
                                <Col xs={12} md={3}>
                                    <label htmlFor="kcm-authenticate-login">Login</label>
                                </Col>
                                <Col xs={12} md={9}>
                                    <input id="kcm-authenticate-login" type="text" name="login" ref={(input) => this.loginInput = input} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={3}>
                                    <label htmlFor="kcm-authenticate-password">Password</label>
                                </Col>
                                <Col xs={12} md={9}>
                                    <input id="kcm-authenticate-password" type="password" name="password" ref={(input) => this.passwordInput = input} />
                                </Col>
                            </Row>
                            <div className={kTextCenter}>
                                <Button label="Log in" type="submit" raised primary />
                            </div>
                        </Grid>
                    </form>
                </div >
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