import type React from 'react'
import styles from '../App.module.css'

function ButtonPanel(props: React.PropsWithChildren) {
  return (
    <p className={styles.buttonPanel}>
      {props.children}
    </p>
  )
}

export default ButtonPanel
