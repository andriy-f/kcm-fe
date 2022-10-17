import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import withReactRouterLink from '../components/WithRouterLinkHOC'

const RTButtonLink = withReactRouterLink(Button)
const RTIconButtonLink = withReactRouterLink(IconButton)

export { RTButtonLink, RTIconButtonLink }
