import React, { Component } from 'react';

import Header from '../containers/header'
import Routes from '../Routes'
import { app } from '../App.css'

class App extends Component {
  render() {
    return (
      // <ThemeProvider theme={theme}>
        <div className={app}>
          <Header />
          <Routes />
        </div>
      // </ThemeProvider>
    );
  }
}

export default App