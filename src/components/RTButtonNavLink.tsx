import React from 'react'
import { connect } from 'react-redux'
import { useAppDispatch } from '../app/hooks'

import { sideNavActiveSetting } from '../consts'
import { setSetting } from '../features/settings/settingsSlice'
import { RTButtonLink } from './RTButtonLink'

function RTButtonNavLink(props: any) {

    const dispatch = useAppDispatch()
    const beforeNavLinkClick = () => dispatch(setSetting({ name: 'sideNavActive', value: false}))
    return (
      <RTButtonLink {...props} beforeClick={beforeNavLinkClick} />
    )
}

export default RTButtonNavLink
