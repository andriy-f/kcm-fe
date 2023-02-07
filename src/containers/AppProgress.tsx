import React from 'react'
import LinearProgress from '@mui/material/LinearProgress'

import styles from '../App.module.css'

const AppProgress = (props: any) => {
    const { isFetchingAnywhere } = props
    return (
        isFetchingAnywhere
        && <LinearProgress className={styles.progressLinear} />
    )
}

export default AppProgress
