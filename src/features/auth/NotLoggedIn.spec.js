import React from 'react'
import { shallow } from 'enzyme'

import NotLoggedIn from './NotLoggedIn'

it('renders without crashing', () => {
  shallow(<NotLoggedIn />)
})

it('Has div in it', () => {
  shallow(<NotLoggedIn />).contains(<div />)
})
