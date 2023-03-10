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
import LogIn from '../features/auth/LogIn'

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
          </ProtectedRoute>
        </>)
      },
      {
        path: 'user/logIn',
        element: <LogIn />,
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
          <React.Suspense fallback={<div>loading...</div>} >
            <RouterProvider router={router} />
          </React.Suspense>
        </AppThemeProvider>
      </ReduxStoreProvider>
    </AppRelayEnvironmentProvider>
  )
}

export default Root
