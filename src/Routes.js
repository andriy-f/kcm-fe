import React from 'react';
import { Route , Switch } from 'react-router-dom';

import intro from './components/intro';
import logInPage from './containers/logIn';
import logoff from './containers/logOut';
import contactList from './containers/contactList';
import ContactEdit from './components/ContactEdit';
import userProfile from './containers/userProfile'
import NotFound from './components/NotFound'

export default () => (
    <Switch>
        <Route exact path="/" component={intro} />
        <Route exact path="/logIn" component={logInPage} />
        <Route exact path="/userProfile" component={userProfile} />
        <Route exact path="/logOut" component={logoff} />
        <Route exact path="/contacts" component={contactList} />
        <Route path="/contacts/:id" component={ContactEdit} />
        <Route component={NotFound} />>
    </Switch>
)