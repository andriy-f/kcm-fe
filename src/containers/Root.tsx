import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { persistStore } from 'redux-persist'

import App from '../components/App'
import { store } from '../app/store'
import ErrorPage from '../app/ErrorPage'
import LogOut from '../features/auth/LogOut'

persistStore(store) //TODO needed?

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
      <RouterProvider router={router} />
    </StoreProvider>
  )
}

export default Root
