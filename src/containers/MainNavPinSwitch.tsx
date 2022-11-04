import React from 'react'
import { connect } from 'react-redux'
import Switch from '@mui/material/Switch'

import { toggleSetting } from '../actions'

class MainNavPinSwitch extends React.Component {
    handleToggleSideNavPinned = () => {
        this.props.toggleSetting('sideNavPinned')
    }

    render() {
        const { sideNavPinned } = this.props
        return <Switch checked={sideNavPinned} label='Pin' onChange={this.handleToggleSideNavPinned} />

    }
}

const mapStateToProps = state => state.settings

const mapDispathToProps = dispatch => ({
    toggleSetting: name => dispatch(toggleSetting({ name }))
})

export default connect(mapStateToProps, mapDispathToProps)(MainNavPinSwitch)
