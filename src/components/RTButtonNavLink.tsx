import React from 'react'
import { connect } from 'react-redux'

import { sideNavActiveSetting } from '../consts'
import { setSetting } from '../actions'
import { RTButtonLink } from './RTButtonLink'

class RTButtonNavLink extends React.Component {
    beforeNavLinkClick = () => {
        this.props.setSetting(sideNavActiveSetting, false)
    }

    render() {
        const { setSetting, ...otherProps} = this.props
        return <RTButtonLink {...otherProps} beforeClick={this.beforeNavLinkClick} />
    }
}

const mapDispatchToProps = (dispatch) => ({
    setSetting: (name, value) => dispatch(setSetting(name, value))
})

export default connect(null, mapDispatchToProps)(RTButtonNavLink)
