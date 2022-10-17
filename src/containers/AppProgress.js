import React from 'react'
import { connect } from 'react-redux'
import ProgressBar from '@mui/material/ProgressBar'

import { progressLinear } from '../App.css'
import { getViewState } from '../utils'

const AppProgress = props => {
    const { isFetchingAnywhere } = props
    return (
        isFetchingAnywhere
        && <ProgressBar type="linear" mode="indeterminate" className={progressLinear} />
    )
}

const mapStateToProps = state => {
    const { isFetchingAnywhere } = getViewState(state)
    return { isFetchingAnywhere }
}

export default connect(mapStateToProps)(AppProgress)
