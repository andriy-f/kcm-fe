import React from 'react';
import { connect } from 'react-redux';

class Logoff extends React.Component {
    componentDidMount(){

    }

    render() {
        return (
           <span>Logging off...</span>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//     beginLogoff: () => {}
// })

export default connect()(Logoff)