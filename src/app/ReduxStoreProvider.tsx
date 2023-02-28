import React, { PropsWithChildren } from 'react'

import { Provider as StoreProvider } from 'react-redux'
import { store } from '../app/store'

export default function ReduxStoreProvider(props: PropsWithChildren) {
  return (
    <StoreProvider store={store}>{props.children}</StoreProvider>
  )
}
