import { Button, IconButton } from 'react-toolbox/lib/button'

import withReactRouterLink from '../components/WithRouterLinkHOC'

const RTButtonLink = withReactRouterLink(Button)
const RTIconButtonLink = withReactRouterLink(IconButton)

export { RTButtonLink, RTIconButtonLink }