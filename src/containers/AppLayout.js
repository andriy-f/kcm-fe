import React from 'react'
import { connect } from 'react-redux'
import { AppBar, Layout, NavDrawer, Sidebar, Panel } from 'react-toolbox'

import MainNav from '../containers/MainNav'
import { mainContent } from '../App.css'
import { toggleSetting } from '../actions'

const AppLayout = (props) => (
    <Layout>
        <NavDrawer
            active={props.sideNavActive}
            clipped={props.sideNavClipped}
            onOverlayClick={props.toggleSetting.bind(null, 'sideNavActive')}
            pinned={props.sideNavPinned}
        >
            <MainNav />
        </NavDrawer>

        <header>
            <AppBar
                fixed
                rightIcon='more'
                leftIcon='menu'
                onLeftIconClick={props.toggleSetting.bind(this, 'sideNavActive')}
                onRightIconClick={props.toggleSetting.bind(this, 'rightSideNavActive')}
                title="K Contact Manager"
            />
        </header>

        <Panel bodyScroll={props.bodyScrolled} >
            <section className={mainContent}>
                {props.children}
            </section>
        </Panel>

        <Sidebar
            active={props.rightSideNavActive}
            onOverlayClick={props.toggleSetting.bind(this, 'rightSideNavActive')}
            clipped={props.rightSideNavClipped}
            pinned={props.rightSideNavPinned}
            right
        >
            <p>Sidebar content.</p>
        </Sidebar>
    </Layout>
)

const mapStateToProps = (state) => state.settings

const mapDispathToProps = dispatch => ({
    toggleSetting: name => dispatch(toggleSetting({ name }))
})


export default connect(mapStateToProps, mapDispathToProps)(AppLayout)