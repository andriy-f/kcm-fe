import React, { Component } from 'react'
import Checkbox from '@mui/material/Checkbox'
import { connect } from 'react-redux'

import { toggleSetting } from '../actions'

class SideNavSettings extends Component {

    handleToggleSideNavPinned = () => {
        this.props.toggleSetting('sideNavPinned')
    }

    handleToggleSideNavClipped = () => {
        this.props.toggleSetting('sideNavClipped')
    }

    render() {
        return (
            <section>
                <h5 style={{ marginBottom: 20 }}>SideNav State</h5>
                <Checkbox
                    label='Pinned'
                    checked={this.props.sideNavPinned}
                    onChange={this.handleToggleSideNavPinned}
                />

                <Checkbox
                    label='Clipped'
                    checked={this.props.sideNavClipped}
                    onChange={this.handleToggleSideNavClipped}
                />
            </section>
        )
    }
}

// const RightSideNavSettings = (props) => (
//     <section>
//         <h5 style={{ marginBottom: 20 }}>Rignt SideNav State</h5>
//         <Checkbox
//             label="Active"
//             checked={this.props.rightSideNavActive}
//             onChange={this.handleToggle.bind(this, 'rightSideNavActive')}
//         />

//         <Checkbox
//             label="Pinned"
//             checked={this.props.rightSideNavPinned}
//             onChange={this.handleToggle.bind(this, 'rightSideNavPinned')}
//         />

//         <Checkbox
//             label="Clipped"
//             checked={this.props.rightSideNavClipped}
//             onChange={this.handleToggle.bind(this, 'rightSideNavClipped')}
//         />
//     </section>
// )

class OtherSettings extends Component {
    handleToggleBodyScrolled = () => {
        this.props.toggleSetting('bodyScrolled')
    }

    render() {
        return (
            <section>
                <h5 style={{ marginBottom: 20 }}>Other</h5>
                <Checkbox
                    label="Body scrolled"
                    checked={this.props.bodyScrolled}
                    onChange={this.handleToggleBodyScrolled}
                />
            </section>
        )
    }
}

class Settings extends Component {
    render() {
        return (
            <section>
                <SideNavSettings {...this.props} />
                <OtherSettings {...this.props} />
            </section>
        )
    }
}

const mapStateToProps = state => state.settings

const mapDispathToProps = dispatch => ({
    toggleSetting: name => dispatch(toggleSetting({ name }))
})

export default connect(mapStateToProps, mapDispathToProps)(Settings)
