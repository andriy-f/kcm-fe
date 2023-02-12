import React from 'react'

import styles from '../App.module.css'

const NarrowLayout = (props: React.PropsWithChildren) => (
  <div className={styles.kFormContainer}>{props.children}</div>
)

export default NarrowLayout
