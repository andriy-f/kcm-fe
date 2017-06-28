import React from 'react';
import { connect } from 'react-redux';

class Logoff extends React.Component {
    render() {
        return (
           <span>Logging off...</span>
        )
    }
}

export default connect()(Logoff)