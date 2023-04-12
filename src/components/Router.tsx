import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from '../app/ErrorPage'
import LogOut from '../features/auth/LogoutPage'
import AppLayout from '../features/layout/AppLayout'
import Intro from './Intro'
import { ProtectedRoute } from '../features/auth/ProtectedRoute'
import ContactsPage from '../features/contacts/ContactsPage'
import LoginPage from '../features/auth/LoginPage'
import ContactDetailsPage from '../features/contacts/ContactDetailsPage'
import GraphQLPlayground from '../features/develop/Playground'
import CreateContactPage from '../features/contacts/CreateContactPage'
import ProfilePage from '../features/viewer/ProfilePage'
import { loginPath, logoutPath } from './../components/paths'
import { DevPage } from '../features/develop/DevPage'

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
        path: 'contact/new',
        element: (<>
          <ProtectedRoute requiredPermissions={['contact-edit']}>
            <CreateContactPage />
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
        path: 'contact/:id/edit',
        element: (<>
          <ProtectedRoute requiredPermissions={['contact-edit']}>
            <ContactDetailsPage editable />
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
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'dev/',
        element: <DevPage />,
      },
      {
        path: 'dev/playground',
        element: <GraphQLPlayground />,
      },
    ]
  },
])

export default router
