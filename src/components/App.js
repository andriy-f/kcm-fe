import React, { Component } from 'react'

import { app, staticErrorMessage } from '../App.css'
import { BACKEND_URL } from '../config'
import AppLayout from '../containers/AppLayout'
import Routes from '../Routes'

class App extends Component {
  render() {
    const isBEConfigured = !!BACKEND_URL
    return (
      <div className={app}>
        <AppLayout>
          <div>
            {!isBEConfigured &&
              <div className={staticErrorMessage}>Backend URL is not configured!</div>
            }
            <Routes />
          </div>
        </AppLayout>
      </div>
    )
  }
}

export default App