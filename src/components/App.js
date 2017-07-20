import React, { Component } from 'react'

import { app } from '../App.css'
import { BACKEND_URL } from '../config'
import AppLayout from '../containers/AppLayout'
import Routes from '../Routes'

class App extends Component {
  render() {
    const isBEConfigured = !!BACKEND_URL
    return (
      <div className={app}>
        {!isBEConfigured &&
          <div style={{ color: 'darkred' }}>Backend URL is not configured!</div>
        }
        <AppLayout>
          <Routes />
        </AppLayout>
      </div>
    )
  }
}

export default App