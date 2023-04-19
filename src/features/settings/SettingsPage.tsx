import React from 'react'
import Checkbox from '@mui/material/Checkbox'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleSetting, selectSideNavPinned, selectSideNavClipped, selectBodyScrolled } from './settingsSlice'


function SideNavSettings() {

    const dispatch = useAppDispatch()

    const sideNavPinned = useAppSelector(selectSideNavPinned)
    const handleToggleSideNavPinned = () => dispatch(toggleSetting({ name: 'sideNavPinned'}))

    const sideNavClipped = useAppSelector(selectSideNavClipped)
    const handleToggleSideNavClipped = () => dispatch(toggleSetting({ name: 'sideNavClipped'}))

        return (
            <section>
                <h5 style={{ marginBottom: 20 }}>SideNav State</h5>
                <Checkbox
                    checked={sideNavPinned}
                    onChange={handleToggleSideNavPinned}
                />

                <Checkbox
                    checked={sideNavClipped}
                    onChange={handleToggleSideNavClipped}
                />
            </section>
        )
}

function OtherSettings() {

    const dispatch = useAppDispatch()

    const bodyScrolled = useAppSelector(selectBodyScrolled)
    const handleToggleBodyScrolled = () => dispatch(toggleSetting({ name: 'bodyScrolled'}))

        return (
            <section>
                <h5 style={{ marginBottom: 20 }}>Other</h5>
                <Checkbox
                    checked={bodyScrolled}
                    onChange={handleToggleBodyScrolled}
                />
            </section>
        )
}

function SettingsPage() {
        return (
            <section>
                <SideNavSettings />
                <OtherSettings />
            </section>
        )
}

export default SettingsPage
