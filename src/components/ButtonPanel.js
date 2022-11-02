import React from 'react'

import { buttonPanel } from '../App.module.css'
export default ({ children }) => (
  <p className={buttonPanel}>
    {children}
  </p>
)
