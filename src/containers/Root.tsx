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
import AppLayout from '../containers/AppLayout'
import Intro from '../components/Intro'

persistStore(store) //TODO needed?

const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro />,
    errorElement: <ErrorPage />
  },
  {
    path: 'user/logOut',
    element: <LogOut />,
  },
])

function Root() {
  return (
    <StoreProvider store={store}>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </StoreProvider>
  )
}

export default Root
