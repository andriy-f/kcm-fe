import React from 'react'
import { connect } from 'react-redux'
import Switch from '@mui/material/Switch'

import { toggleSetting } from '../actions'
import { Dispatch } from 'redux'
import { RootState } from '../app/store'

class MainNavPinSwitch extends React.Component {
    handleToggleSideNavPinned = () => {
        this.props.toggleSetting('sideNavPinned')
    }

    render() {
        const { sideNavPinned } = this.props
        return <Switch checked={sideNavPinned} label='Pin' onChange={this.handleToggleSideNavPinned} />

    }
}

const mapStateToProps = (state: RootState) => state.settings

const mapDispathToProps = (dispatch: Dispatch) => ({
    toggleSetting: (name: string) => dispatch(toggleSetting({ name }))
})

export default connect(mapStateToProps, mapDispathToProps)(MainNavPinSwitch)
