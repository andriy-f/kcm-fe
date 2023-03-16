import React from 'react'
import { createBrowserRouter, } from 'react-router-dom'

import ErrorPage from '../app/ErrorPage'
import LogOut from '../features/auth/LogoutPage'
import AppLayout from './AppLayout'
import Intro from './Intro'
import { ProtectedRoute } from '../features/auth/ProtectedRoute'
import ContactsPage from './ContactsPage'
import LoginPage from '../features/auth/LoginPage'

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
        path: 'user/login',
        element: <LoginPage />,
      },
      {
        path: 'user/logout',
        element: <LogOut />,
      },
    ]
  },
])

export default router
