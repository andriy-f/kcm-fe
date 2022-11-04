// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Intro from './components/Intro'
import LogInPage from './containers/LogIn'
import LogOutPage from './containers/LogOut'
import EditableContactsPage from './components/EditableContactsPage'
import ReadonlyContactsPage from './components/ReadonlyContactsPage'
import ContactEditPage from './components/ContactEditPage'
import ContactViewPage from './components/ContactViewPage'
import ContactCreatePage from './components/ContactCreatePage'
import userProfile from './containers/userProfile'
import NotFound from './components/NotFound'
import NotLoggedIn from './components/NotLoggedIn'
import NotAuthorized from './components/NotAuthorized'
import DevPage from './containers/DevPage'
import SettingsPage from './containers/SettingsPage'
import ConditionalAuthHOC from './containers/ConditionalAuthHOC'

const DefaultConditionalAuthHOC = ConditionalAuthHOC({ NotLoggedIn, NotAuthorized })

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Intro} />
    <Route exact path="/logIn" component={LogInPage} />
    <Route exact path="/userProfile" component={userProfile} />
    <Route exact path="/logOut" component={LogOutPage} />
    <Route exact path="/contacts"
      component={DefaultConditionalAuthHOC([
        [['contact-list-view', 'contact-edit'], EditableContactsPage],
        [['contact-list-view'], ReadonlyContactsPage],
      ])} />
    <Route path="/contacts/new"
      component={DefaultConditionalAuthHOC([[['contact-edit'], ContactCreatePage]])} />
    <Route exact path="/contacts/edit/:id"
      component={DefaultConditionalAuthHOC([[['contact-view', 'contact-edit'], ContactEditPage]])} />
    <Route exact path="/contacts/view/:id"
      component={DefaultConditionalAuthHOC([[['contact-view'], ContactViewPage]])} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/dev" component={DevPage} />
    <Route component={NotFound} />>
  </Switch>
)

export default Routes
