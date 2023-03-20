// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import Intro from './components/Intro'
import LogInPage from './features/auth/LoginPage'
// import LogOutPage from './components/LogOut'
import ContactEditPage from './components/ContactEditPage'
import ContactViewPage from './components/ContactViewPage'
import ContactCreatePage from './components/ContactCreatePage'
import userProfile from './components/userProfile'
import NotFound from './components/NotFound'
// import NotLoggedIn from './components/NotLoggedIn'
import NotAuthorized from './features/auth/NotAuthorized'
import DevPage from './components/DevPage'
import SettingsPage from './features/settings/SettingsPage'
// import ConditionalAuthHOC from './components/ConditionalAuthHOC'

// const DefaultConditionalAuthHOC = ConditionalAuthHOC({ NotLoggedIn, NotAuthorized })

// const Routes = () => (
//   <Switch>
//     <Route exact path="/" component={Intro} />
//     <Route exact path="/logIn" component={LogInPage} />
//     <Route exact path="/userProfile" component={userProfile} />
//     <Route exact path="/logOut" component={LogOutPage} />
//     <Route exact path="/contacts"
//       component={DefaultConditionalAuthHOC([
//         [['contact-list-view', 'contact-edit'], EditableContactsPage],
//         [['contact-list-view'], ReadonlyContactsPage],
//       ])} />
//     <Route path="/contacts/new"
//       component={DefaultConditionalAuthHOC([[['contact-edit'], ContactCreatePage]])} />
//     <Route exact path="/contacts/edit/:id"
//       component={DefaultConditionalAuthHOC([[['contact-view', 'contact-edit'], ContactEditPage]])} />
//     <Route exact path="/contacts/view/:id"
//       component={DefaultConditionalAuthHOC([[['contact-view'], ContactViewPage]])} />
//     <Route path="/settings" component={SettingsPage} />
//     <Route path="/dev" component={DevPage} />
//     <Route component={NotFound} />
//   </Switch>
// )

// export default Routes
