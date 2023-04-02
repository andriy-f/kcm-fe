import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { loadQuery } from 'react-relay'

import ErrorPage from '../app/ErrorPage'
import LogOut from '../features/auth/LogoutPage'
import AppLayout from './AppLayout'
import Intro from './Intro'
import { ProtectedRoute } from '../features/auth/ProtectedRoute'
import ContactsPage, { ContactsPageQuery } from '../features/contacts/ContactsPage'
import LoginPage from '../features/auth/LoginPage'
import { defaultEnvironment } from '../relay/environment'

export const loginPath = 'login'
export const logoutPath = 'logout'

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
        </>),
        loader: () => {
          return loadQuery(defaultEnvironment, ContactsPageQuery, {})
        },
      },
      {
        path: loginPath,
        element: <LoginPage />,
      },
      {
        path: logoutPath,
        element: <LogOut />,
      },
    ]
  },
])

export default router
