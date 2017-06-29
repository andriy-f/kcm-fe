import React from 'react';
import { connect } from 'react-redux';

import { requestLogoff } from '../actions';

class Logoff extends React.Component {
    componentDidMount(){
        this.props.initiateLogoff();
    }

    render() {
        return (
           <span>Logging off...</span>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    initiateLogoff: () => dispatch(requestLogoff())
})

export default connect(null, mapDispatchToProps)(Logoff)