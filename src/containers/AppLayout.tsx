import React from 'react'
// import { AppBar, Layout, Panel } from <removed>
import Drawer from '@mui/material/Drawer'

import MainNav from './MainDrawer'
import styles from '../App.module.css'
import AppProgress from '../containers/AppProgress'
import { sideNavActiveSetting } from '../consts'
import MainNavPinSwitch from '../containers/MainNavPinSwitch'

function AppLayout()  {
    toggleSideNav = () => {
        this.props.toggleSetting(sideNavActiveSetting)
    }

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
                    <section className={styles.mainContent}>
                        {this.props.children}
                    </section>
                </Panel>
            </Layout>
        )
    }

export default AppLayout
