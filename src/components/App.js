import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { AppBar, Layout, NavDrawer, Sidebar, Panel } from 'react-toolbox'

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
    )
  }
}

const mapStateToProps = (state) => {
  const { settings } = state;
  return settings
}

const mapDispathToProps = dispatch => {
  return {
    toggleSetting: (name) => dispatch(toggleSetting({ name }))
  }
}

export default withRouter(connect(mapStateToProps, mapDispathToProps)(App))