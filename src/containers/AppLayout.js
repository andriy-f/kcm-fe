import React from 'react'
import { connect } from 'react-redux'
// import { AppBar, Layout, Panel } from <removed>
import Drawer from '@mui/material/Drawer'

import MainNav from '../containers/MainNav'
import { mainContent } from '../App.css'
import { toggleSetting } from '../actions'
import AppProgress from '../containers/AppProgress'
import { sideNavActiveSetting } from '../consts'
import MainNavPinSwitch from '../containers/MainNavPinSwitch'

class AppLayout extends React.Component {
    toggleSideNav = () => {
        this.props.toggleSetting(sideNavActiveSetting)
    }

    render() {
        return (
            <Layout>
                <Drawer
                    active={this.props.sideNavActive}
                    clipped={this.props.sideNavClipped}
                    onOverlayClick={this.toggleSideNav}
                    pinned={this.props.sideNavPinned}
                >
                    <MainNav />
                    <MainNavPinSwitch />
                </Drawer>

                <AppBar
                    fixed
                    leftIcon='menu'
                    onLeftIconClick={this.toggleSideNav}
                    title='K Contact Manager'
                />
                <AppProgress />

                <Panel bodyScroll={this.props.bodyScrolled}>
                    <section className={mainContent}>
                        {this.props.children}
                    </section>
                </Panel>
            </Layout>
        )
    }
}

const mapStateToProps = state => state.settings

const mapDispathToProps = dispatch => ({
    toggleSetting: name => dispatch(toggleSetting({ name }))
})

export default connect(mapStateToProps, mapDispathToProps)(AppLayout)
