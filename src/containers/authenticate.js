
import React from 'react';
import { connect } from 'react-redux';

import { requestAuthenticate } from '../actions';

class Authorize extends React.Component {
    handleSubmit = () => {
        this.props.initAuthenticate();
    }
    render() {
        return (
            <div className="authenticate">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="kcm-authenticate-login">Login</label>
                        <input id="kcm-authenticate-login" type="text" name="login" />
                    </div>
                    <div>
                        <label htmlFor="kcm-authenticate-password">Password</label>
                        <input id="kcm-authenticate-password" type="password" name="password" />
                    </div>
                    <div>
                        <input type="submit" value="Logon" />
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = () => ({
    initAuthenticate: (dispatch) => dispatch(requestAuthenticate)
});

export default connect(null, mapDispatchToProps)(Authorize);