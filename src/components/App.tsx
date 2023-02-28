import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from '../app/ErrorPage'
import LogOut from '../features/auth/LogOut'
import AppLayout from './AppLayout'
import Intro from './Intro'
import { ProtectedRoute } from '../features/auth/ProtectedRoute'
import ContactsPage from './ContactsPage'
import AppRelayEnvironmentProvider from '../relay/AppRelayEnvironment'
import ReduxStoreProvider from '../app/ReduxStoreProvider'
import AppThemeProvider from '../app/AppThemeProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Intro />
      },
      {
        path: 'contacts/',
        element: (<>
          <ProtectedRoute requiredPermissions={['contact-list-view']}>
            <ContactsPage />
            hello
          </ProtectedRoute>)
        </>)
      },
      {
        path: 'user/logOut',
        element: <LogOut />,
      },
    ]
  },
])

function Root() {
  return (
    <AppRelayEnvironmentProvider>
      <ReduxStoreProvider>
        <AppThemeProvider>
          <RouterProvider router={router} />
        </AppThemeProvider>
      </ReduxStoreProvider>
    </AppRelayEnvironmentProvider>
  )
}

export default Root
