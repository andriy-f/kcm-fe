import { Link as RRLink } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks'
import { selectViewer, isViewerLoggedIn } from './viewerSlice'

function ProfilePage() {
  const viewer = useAppSelector(selectViewer)
  const isLoggedIn = useAppSelector(isViewerLoggedIn)
  if (isLoggedIn) {
    const isLoggedInStr = isLoggedIn ? 'yes' : 'no'
    const expStr = viewer.tokenExpiresOn ? new Date(viewer.tokenExpiresOn).toString() : 'n/a'

    return (
      <>
        <div>isLoggedIn: {isLoggedInStr}</div>
        <div>Login expires(ed) at: {expStr}</div>
        {isLoggedIn && <RRLink to="/logout">Log out</RRLink>}
      </>
    )
  } else {
    return (
      <>
        <div>
          Not logged in
        </div>
        <RRLink to="/login">Log in</RRLink>
      </>
    )
  }
}

export default ProfilePage
