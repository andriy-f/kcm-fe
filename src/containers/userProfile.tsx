
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectCurrentUser, isCurrentUserLoggedIn } from '../features/currentUser/userSlice'

function UserProfilePage() {

        const currentUser = useAppSelector(selectCurrentUser)
        const isLoggedIn = useAppSelector(isCurrentUserLoggedIn)
        const isLoggedInStr = isLoggedIn ? 'yes' : 'no'
        const expStr = currentUser.tokenExpiresOn ? new Date(currentUser.tokenExpiresOn).toString() : 'n/a'

        return (
            <div>
                <div>isLoggedIn: {isLoggedInStr}</div>
                <div>Login expires(ed) at: {expStr}</div>
                {isLoggedIn && <Link to="/logOut">Log out</Link>}
            </div>
        )
    }

export default UserProfilePage
