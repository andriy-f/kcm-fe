import React, { Component } from 'react';
import { Route} from 'react-router-dom';

import '../App.css';
import intro from '../components/intro';
import logInPage from '../containers/logIn';
import logoff from '../containers/logOut';
import contactList from '../containers/contactList';
import contactDetails from '../components/contactDetails';
import Header from '../containers/header'
import userProfile from '../containers/userProfile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />        
        <div className="App-body">
          <Route exact path="/" component={intro} />
          <Route exact path="/logIn" component={logInPage} />
          <Route exact path="/userProfile" component={userProfile} />
          <Route exact path="/logoff" component={logoff} />
          <Route exact path="/contacts" component={contactList} />
          <Route exact path="/contact/:contactId" component={contactDetails} />
        </div>
      </div>
    );
  }
}

export default App