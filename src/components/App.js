import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { AppBar, Layout, NavDrawer, Sidebar, Panel, Checkbox } from 'react-toolbox'

import MainNav from '../containers/MainNav'
import Routes from '../Routes'
import { app, mainContent } from '../App.css'
import { BACKEND_URL } from '../config'

class App extends Component {
  state = {
    bodyScrolled: false,
    sideNavActive: false,
    sideNavPinned: false,
    sideNavClipped: true,
    rightSideNavActive: false,
    rightSideNavPinned: false,
    rightSideNavClipped: true
  }

  handleToggle = param => {
    this.setState({ [param]: !this.state[param] })
  }
  render() {
    const { sideNavActive, rightSideNavActive } = this.state
    const isBEConfigured = !!BACKEND_URL
    return (
      // <ThemeProvider theme={theme}>
      <div className={app}>
        {!isBEConfigured &&
          <div style={{ color: 'darkred' }}>Backend URL is not configured!</div>
        }
        <Layout>
          <NavDrawer
            active={sideNavActive}
            clipped={this.state.sideNavClipped}
            onOverlayClick={this.handleToggle.bind(this, 'sideNavActive')}
            permanentAt="xxxl"
            pinned={this.state.sideNavPinned}
          >
            <MainNav />
          </NavDrawer>

          <header>
            <AppBar
              fixed
              rightIcon='more'
              leftIcon='menu'
              onLeftIconClick={this.handleToggle.bind(this, 'sideNavActive')}
              onRightIconClick={this.handleToggle.bind(this, 'rightSideNavActive')}
              title="K Contact Manager"
            />
          </header>

          <Panel bodyScroll={this.state.bodyScrolled} >
            <section className={mainContent}>
              <Routes />
              <h5 style={{ marginBottom: 20 }}>SideNav State</h5>
              <Checkbox
                label='Pinned'
                checked={this.state.sideNavPinned}
                onChange={this.handleToggle.bind(this, 'sideNavPinned')}
              />

              <Checkbox
                label='Clipped'
                checked={this.state.sideNavClipped}
                onChange={this.handleToggle.bind(this, 'sideNavClipped')}
              />

              <Checkbox
                label="Right SideNav Active"
                checked={this.state.rightSideNavActive}
                onChange={this.handleToggle.bind(this, 'rightSideNavActive')}
              />

              <Checkbox
                label="Right SideNav Pinned"
                checked={this.state.rightSideNavPinned}
                onChange={this.handleToggle.bind(this, 'rightSideNavPinned')}
              />

              <Checkbox
                label="Right SideNav Clipped"
                checked={this.state.rightSideNavClipped}
                onChange={this.handleToggle.bind(this, 'rightSideNavClipped')}
              />

              <Checkbox
                label="Body scrolled"
                checked={this.state.bodyScrolled}
                onChange={this.handleToggle.bind(this, 'bodyScrolled')}
              />
            </section>
          </Panel>

          <Sidebar
            active={rightSideNavActive}
            onOverlayClick={this.handleToggle.bind(this, 'rightSideNavActive')}
            clipped={this.state.rightSideNavClipped}
            pinned={this.state.rightSideNavPinned}
            right
          >
            <p>Sidebar content.</p>
          </Sidebar>
        </Layout>
      </div>
      // </ThemeProvider>
    )
  }
}

export default withRouter(connect()(App))