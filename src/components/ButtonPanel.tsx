import React from 'react'

import styles from '../App.module.css'

export default ({ children }) => (
  <p className={styles.buttonPanel}>
    {children}
  </p>
)
