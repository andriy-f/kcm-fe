import React from 'react'
import { NavLink } from 'react-router-dom'

import { isDevEnv } from '../../config'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from '@mui/icons-material/Contacts'
// import SettingsIcon from '@mui/icons-material/Settings'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'

const items = [
  { caption: 'Intro', to: '/', icon: <HomeIcon /> },
  { caption: 'Contacts', to: '/contacts', icon: <ContactsIcon /> },
  // { caption: 'Settings', to: '/settings', icon: <SettingsIcon /> },
  { caption: 'Dev', to: '/dev', icon: <DeveloperModeIcon />, hidden: !isDevEnv },
]

function Navigation() {

  return (
    <List>
      {items.map(({ caption, to, icon, hidden }) => (
        hidden
          ? null
          : (
            <ListItem key={caption} disablePadding>
              <ListItemButton component={NavLink} to={to}>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={caption} />
              </ListItemButton>
            </ListItem>
          )
      ))}
    </List>
  )
}

export default Navigation
