import React from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import { defaultEnvironment } from './environment'

export default function AppRelayEnvironmentProvider({ children }:
  React.PropsWithChildren) {
  // What this is for?
  // const environment = useMemo(() => {
  //   return createEnvironment();
  // }, []);

  return (
    <RelayEnvironmentProvider environment={defaultEnvironment}>
      {children}
    </RelayEnvironmentProvider>
  )
}
