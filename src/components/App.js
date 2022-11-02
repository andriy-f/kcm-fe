import React, { Component } from 'react'
import debug from 'debug'

import { app, staticErrorMessage } from '../App.module.css'
import { BACKEND_URL } from '../config'
import { appName, isSSR } from '../consts'
import AppLayout from '../containers/AppLayout'
import Routes from '../Routes'

const logger = debug(appName + ':App.js')

logger('isSSR', isSSR)

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
