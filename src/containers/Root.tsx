import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { persistStore } from 'redux-persist'

import App from '../components/App'
import { store } from '../app/store'

persistStore(store) //TODO needed?

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
