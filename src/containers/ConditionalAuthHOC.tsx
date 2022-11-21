// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import { isUserLoggedIn } from '../utils'

interface Defaults {
  NotLoggedIn: React.ComponentType<Object>,
  NotAuthorized: React.ComponentType<Object>,
}

type MappingItem = [
  string[], // array of required permissions
  React.ComponentType<Object>,
]

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default ({ NotLoggedIn, NotAuthorized }: Defaults) => (mappings: MappingItem[]) => {
  class ConditionalAuth extends React.Component<Object> {
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

  return connect(mapStateToProps)(ConditionalAuth)
}
