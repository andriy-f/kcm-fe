// @flow
import * as React from 'react'
import { UserState } from '../features/currentUser/userSlice'

import { isUserLoggedIn } from '../utils'

interface Defaults {
  NotLoggedIn: React.ComponentType<object>,
  NotAuthorized: React.ComponentType<object>,
}

type MappingItem = [
  string[], // array of required permissions
  React.ComponentType<object>,
]

type Props = {
  currentUser: UserState
}

const ConditionalAuthHOC = ({ NotLoggedIn, NotAuthorized }: Defaults) => (mappings: MappingItem[]) => {
  return class extends React.Component<Props> {
    render() {
      const { currentUser } = this.props
      if (!isUserLoggedIn(currentUser)) {
        return <NotLoggedIn />
      }

      const fitMapping = mappings.find(m => m[0].every(p => currentUser.permissions.includes(p)))
      if (fitMapping) {
        const Component = fitMapping[1]
        return <Component {...this.props} />
      } else {
        return <NotAuthorized />
      }
    }
  }
}

export default ConditionalAuthHOC
