import React from 'react'
import { connect } from 'react-redux'
import { AppBar, Layout, NavDrawer, Panel } from 'react-toolbox'

import MainNav from '../containers/MainNav'
import { mainContent } from '../App.css'
import { toggleSetting } from '../actions'
import AppProgress from '../containers/AppProgress'

class AppLayout extends React.Component {
    toggleSideNav = () => {
        this.props.toggleSetting('sideNavPinned')
    }

    render() {
        return (
            <Layout>
                <NavDrawer
                    active={this.props.sideNavActive}
                    clipped={this.props.sideNavClipped}
                    onOverlayClick={this.toggleSideNav}
                    pinned={this.props.sideNavPinned}
                >
                    <MainNav />
                </NavDrawer>

                <header>
                    <AppBar
                        fixed
                        leftIcon='menu'
                        onLeftIconClick={this.toggleSideNav}
                        title='K Contact Manager'
                    />
                </header>

                <Panel bodyScroll={this.props.bodyScrolled} >
                    <section className={mainContent}>
                        <AppProgress />
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