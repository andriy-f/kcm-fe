import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from '../app/ErrorPage'
import LogOut from '../features/auth/LogoutPage'
import AppLayout from '../features/layout/AppLayout'
import About from '../features/about/About'
import RequireAuth from '../features/auth/RequireAuth'
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
        element: <About />
      },
      {
        path: 'contacts/',
        element: (<>
          <RequireAuth permissions={['contact-list-view']}>
            <ContactsPage />
          </RequireAuth>
        </>),
      },
      {
        path: 'contact/new',
        element: (<>
          <RequireAuth permissions={['contact-edit']}>
            <CreateContactPage />
          </RequireAuth>
        </>),
      },
      {
        path: 'contact/:id',
        element: (<>
          <RequireAuth permissions={['contact-view']}>
            <ContactDetailsPage />
          </RequireAuth>
        </>),
      },
      {
        path: 'contact/:id/edit',
        element: (<>
          <RequireAuth permissions={['contact-edit']}>
            <ContactDetailsPage editable />
          </RequireAuth>
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
        element: (
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        ),
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
