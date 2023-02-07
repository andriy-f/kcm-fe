// TODO delete

import React, { Component } from 'react'
import debug from 'debug'

import styles from '../App.module.css'
import { BACKEND_URL } from '../config'
import { appName, isSSR } from '../consts'
// import AppLayout from '../containers/AppLayout'
// import Routes from '../Routes'

const logger = debug(appName + ':App.js')

logger('isSSR', isSSR)

// class App extends Component {
//   render() {
//     const isBEConfigured = !!BACKEND_URL
//     return (
//       <div className={styles.app}>
//         <AppLayout>
//           <div>
//             {!isBEConfigured &&
//               <div className={styles.staticErrorMessage}>Backend URL is not configured!</div>
//             }
//             <Routes />
//           </div>
//         </AppLayout>
//       </div>
//     )
//   }
// }

// export default App
