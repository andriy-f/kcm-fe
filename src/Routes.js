import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Intro from './components/Intro'
import LogInPage from './containers/LogIn'
import LogOutPage from './containers/LogOut'
import ContactsPage from './components/ContactsPage'
import ContactEditPage from './components/ContactEditPage'
import ContactCreatePage from './components/ContactCreatePage'
import userProfile from './containers/userProfile'
import NotFound from './components/NotFound'
import DevPage from './containers/DevPage'
import SettingsPage from './containers/SettingsPage'
import AuthHOC from './containers/AuthHOC'

export default () => (
    <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/logIn" component={LogInPage} />
        <Route exact path="/userProfile" component={userProfile} />
        <Route exact path="/logOut" component={LogOutPage} />
        <Route exact path="/contacts" component={AuthHOC(['contact-list-view'])(ContactsPage)} />
        <Route path="/contacts/new" component={AuthHOC(['contact-edit'])(ContactCreatePage)} />
        <Route path="/contacts/:id" component={AuthHOC(['contact-edit'])(ContactEditPage)} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/dev" component={DevPage} />
        <Route component={NotFound} />>
    </Switch>
)
