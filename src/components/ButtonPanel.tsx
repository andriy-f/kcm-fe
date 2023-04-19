import React from 'react'

import styles from '../App.module.css'

function ButtonPanel(props: { children: any }) {
  return (
    <p className={styles.buttonPanel}>
      {props.children}
    </p>
  )
}

export default ButtonPanel
