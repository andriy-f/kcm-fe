
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectViewer, isViewerLoggedIn } from '../features/viewer/viewerSlice'

function UserProfilePage() {

        const viewer = useAppSelector(selectViewer)
        const isLoggedIn = useAppSelector(isViewerLoggedIn)
        const isLoggedInStr = isLoggedIn ? 'yes' : 'no'
        const expStr = viewer.tokenExpiresOn ? new Date(viewer.tokenExpiresOn).toString() : 'n/a'

        return (
            <div>
                <div>isLoggedIn: {isLoggedInStr}</div>
                <div>Login expires(ed) at: {expStr}</div>
                {isLoggedIn && <Link to="/logout">Log out</Link>}
            </div>
        )
    }

export default UserProfilePage
