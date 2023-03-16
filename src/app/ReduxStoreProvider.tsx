import React, { PropsWithChildren } from 'react'
import { PersistGate } from 'redux-persist/integration/react'

import { Provider as StoreProvider } from 'react-redux'
import { store, persistor } from '../app/store'

export default function ReduxStoreProvider(props: PropsWithChildren) {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={<div>Loading state...</div>} persistor={persistor}>
        {props.children}
      </PersistGate>
    </StoreProvider>
  )
}
