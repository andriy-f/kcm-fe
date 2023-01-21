
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectUser } from '../features/currentUser/userSlice'

import { isUserLoggedIn } from '../utils'

function UserProfilePage() {

        const currentUser = useAppSelector(selectUser)
        const isLoggedIn = isUserLoggedIn(currentUser)
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
