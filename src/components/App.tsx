import React from 'react'
import { RouterProvider, } from 'react-router-dom'
import AppRelayEnvironmentProvider from '../relay/AppRelayEnvironment'
import ReduxStoreProvider from '../app/ReduxStoreProvider'
import AppThemeProvider from '../app/AppThemeProvider'
import router from './Router'

function Root() {
  return (
    <AppRelayEnvironmentProvider>
      <ReduxStoreProvider>
        <AppThemeProvider>
          <React.Suspense fallback={<div>loading...</div>} >
            <RouterProvider router={router} />
          </React.Suspense>
        </AppThemeProvider>
      </ReduxStoreProvider>
    </AppRelayEnvironmentProvider>
  )
}

export default Root
