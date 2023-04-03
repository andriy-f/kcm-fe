import React from 'react'
import { NavLink } from 'react-router-dom'

import { isDev } from '../utils'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const items = [
  { caption: 'Intro', to: '/' },
  { caption: 'Contacts', to: '/contacts' },
  { caption: 'Settings', to: '/settings', hidden: true },
  { caption: 'Dev', to: '/dev', hidden: !isDev || true }, // TODO: remove true
]
function Navigation() {

  return (
    <List>
      {items.map(({ caption, to, hidden }) => (
        hidden
          ? null
          : (
            <ListItem key={caption} disablePadding>
              <ListItemButton component={NavLink} to={to}>
                <ListItemText primary={caption} />
              </ListItemButton>
            </ListItem>
          )
      ))}
    </List>
  )
}

export default Navigation
