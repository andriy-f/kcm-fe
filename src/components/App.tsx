import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { persistStore } from 'redux-persist'

import { store } from '../app/store'
import ErrorPage from '../app/ErrorPage'
import LogOut from '../features/auth/LogOut'
import AppLayout from './AppLayout'
import Intro from './Intro'
import { ProtectedRoute } from '../features/auth/ProtectedRoute'
import ContactsPage from './ContactsPage'
import AppRelayEnvironment from '../relay/AppRelayEnvironment'

persistStore(store) //TODO needed?

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
    <AppRelayEnvironment>
      <StoreProvider store={store}>
        <RouterProvider router={router} />
      </StoreProvider>
    </AppRelayEnvironment>
  )
}

export default Root
