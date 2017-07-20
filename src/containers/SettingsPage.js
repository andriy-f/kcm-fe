import React, { Component } from 'react'
import { Checkbox } from 'react-toolbox'
import { connect } from 'react-redux'

import { toggleSetting } from '../actions'

class Settings extends Component {
    handleToggle = param => {
        this.props.toggleSetting(param)
    }

    render() {
        return (
            <section>
                <h5 style={{ marginBottom: 20 }}>SideNav State</h5>
                <Checkbox
                    label='Pinned'
                    checked={this.props.sideNavPinned}
                    onChange={this.handleToggle.bind(this, 'sideNavPinned')}
                />

                <Checkbox
                    label='Clipped'
                    checked={this.props.sideNavClipped}
                    onChange={this.handleToggle.bind(this, 'sideNavClipped')}
                />

                <h5 style={{ marginBottom: 20 }}>Rignt SideNav State</h5>
                <Checkbox
                    label="Active"
                    checked={this.props.rightSideNavActive}
                    onChange={this.handleToggle.bind(this, 'rightSideNavActive')}
                />

                <Checkbox
                    label="Pinned"
                    checked={this.props.rightSideNavPinned}
                    onChange={this.handleToggle.bind(this, 'rightSideNavPinned')}
                />

                <Checkbox
                    label="Clipped"
                    checked={this.props.rightSideNavClipped}
                    onChange={this.handleToggle.bind(this, 'rightSideNavClipped')}
                />

                <h5 style={{ marginBottom: 20 }}>Other</h5>
                <Checkbox
                    label="Body scrolled"
                    checked={this.props.bodyScrolled}
                    onChange={this.handleToggle.bind(this, 'bodyScrolled')}
                />
            </section>
        )
    }
}

const mapStateToProps = state => state.settings

const mapDispathToProps = dispatch => ({
    toggleSetting: name => dispatch(toggleSetting({ name }))
})

export default connect(mapStateToProps, mapDispathToProps)(Settings)