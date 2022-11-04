import React from 'react'
import { connect } from 'react-redux'
import LinearProgress from '@mui/material/LinearProgress'

import { progressLinear } from '../App.module.css'
import { getViewState } from '../utils'

const AppProgress = props => {
    const { isFetchingAnywhere } = props
    return (
        isFetchingAnywhere
        && <LinearProgress className={progressLinear} />
    )
}

const mapStateToProps = state => {
    const { isFetchingAnywhere } = getViewState(state)
    return { isFetchingAnywhere }
}

export default connect(mapStateToProps)(AppProgress)
