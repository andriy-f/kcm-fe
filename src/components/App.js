import React, { Component } from 'react';

import Header from '../containers/header'
import Routes from '../Routes'
import { app } from '../App.css'
import { BACKEND_URL } from '../config'

class App extends Component {
  render() {
    const isBEConfigured = !!BACKEND_URL
    return (
      // <ThemeProvider theme={theme}>
      <div className={app}>
        {!isBEConfigured &&
          <div style={{color: 'darkred'}}>Backend URL is not configured!</div>
        }
        <Header />
        <Routes />
      </div>
      // </ThemeProvider>
    );
  }
}

export default App