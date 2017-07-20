import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { AppBar, Layout, NavDrawer, Sidebar, Panel, Checkbox } from 'react-toolbox'

import MainNav from '../containers/MainNav'
import Routes from '../Routes'
import { app, mainContent } from '../App.css'
import { BACKEND_URL } from '../config'
import { toggleSetting } from '../actions'

class App extends Component {
  handleToggle = param => {
    this.props.toggleSetting(param)
  }

  render() {
    const { sideNavActive, rightSideNavActive } = this.props
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
            clipped={this.props.sideNavClipped}
            onOverlayClick={this.handleToggle.bind(this, 'sideNavActive')}
            pinned={this.props.sideNavPinned}
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

          <Panel bodyScroll={this.props.bodyScrolled} >
            <section className={mainContent}>
              <Routes />
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

              <Checkbox
                label="Right SideNav Active"
                checked={this.props.rightSideNavActive}
                onChange={this.handleToggle.bind(this, 'rightSideNavActive')}
              />

              <Checkbox
                label="Right SideNav Pinned"
                checked={this.props.rightSideNavPinned}
                onChange={this.handleToggle.bind(this, 'rightSideNavPinned')}
              />

              <Checkbox
                label="Right SideNav Clipped"
                checked={this.props.rightSideNavClipped}
                onChange={this.handleToggle.bind(this, 'rightSideNavClipped')}
              />

              <Checkbox
                label="Body scrolled"
                checked={this.props.bodyScrolled}
                onChange={this.handleToggle.bind(this, 'bodyScrolled')}
              />
            </section>
          </Panel>

          <Sidebar
            active={rightSideNavActive}
            onOverlayClick={this.handleToggle.bind(this, 'rightSideNavActive')}
            clipped={this.props.rightSideNavClipped}
            pinned={this.props.rightSideNavPinned}
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

const mapStateToProps = (state) => {
  const { settings: { bodyScrolled, sideNavActive, sideNavPinned,
    sideNavClipped, rightSideNavActive, rightSideNavPinned, rightSideNavClipped } } = state;

  return ({
    bodyScrolled,
    sideNavActive,
    sideNavPinned,
    sideNavClipped,
    rightSideNavActive,
    rightSideNavPinned,
    rightSideNavClipped,
  })
}

const mapDispathToProps = dispatch => {
  return {
    toggleSetting: (name) => dispatch(toggleSetting({name}))
  }
}

export default withRouter(connect(mapStateToProps, mapDispathToProps)(App))