import React from 'react'
import { NavLink } from 'react-router-dom'

import { isDev } from '../utils'

function Navigation() {

  return (<>
    <NavLink to='/'>Intro</NavLink>
    <NavLink to='/contacts'>Contacts</NavLink>
    <NavLink to='/settings'>Settings</NavLink>
    {isDev && <NavLink to='/dev' >Dev</NavLink>}
  </>)
}

export default Navigation
