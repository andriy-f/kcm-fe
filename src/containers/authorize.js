
import React from 'react';
import { connect } from 'react-redux';

class Authorize extends React.Component {
    render() {
        return (
            <div className="authorize">
                <form>
                    <div>
                        <label htmlFor="kcm-authorize-login">Login</label>
                        <input id="kcm-authorize-login" type="text" name="login" />
                    </div>
                    <div>
                        <label htmlFor="kcm-authorize-password">Password</label>
                        <input id="kcm-authorize-password" type="password" name="password" />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(Authorize);