import React from 'react';
import { Route, Switch } from 'react-router-dom';

import intro from './components/intro';
import logInPage from './containers/LogIn';
import logoff from './containers/LogOut';
import contactList from './containers/contactList';
import ContactEdit from './containers/ContactEdit';
import ContactAddPage from './containers/ContactAddPage';
import userProfile from './containers/userProfile'
import NotFound from './components/NotFound'
import DevPage from './containers/DevPage'
import SettingsPage from './containers/SettingsPage'
import AuthHOC from './containers/AuthHOC'

export default () => (
    <Switch>
        <Route exact path="/" component={intro} />
        <Route exact path="/logIn" component={logInPage} />
        <Route exact path="/userProfile" component={userProfile} />
        <Route exact path="/logOut" component={logoff} />
        <Route exact path="/contacts" component={AuthHOC(['contact-list-view'])(contactList)} />
        <Route path="/contacts/new" component={AuthHOC(['contact-edit'])(ContactAddPage)} />
        <Route path="/contacts/:id" component={AuthHOC(['contact-edit'])(ContactEdit)} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/dev" component={DevPage} />
        <Route component={NotFound} />>
    </Switch>
)