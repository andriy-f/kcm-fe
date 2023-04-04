import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from '../app/ErrorPage'
import LogOut from '../features/auth/LogoutPage'
import AppLayout from './AppLayout'
import Intro from './Intro'
import { ProtectedRoute } from '../features/auth/ProtectedRoute'
import ContactsPage from '../features/contacts/ContactsPage'
import LoginPage from '../features/auth/LoginPage'
import ContactDetailsPage from '../features/contacts/ContactDetailsPage'

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
      },
      {
        path: 'contact/:id',
        element: (<>
          <ProtectedRoute requiredPermissions={['contact-view']}>
            <ContactDetailsPage />
          </ProtectedRoute>
        </>),
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
