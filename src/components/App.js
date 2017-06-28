import React, { Component } from 'react';
import { Route} from 'react-router-dom';

import '../App.css';
import intro from '../components/intro';
import authenticate from '../containers/authenticate';
import contactList from '../containers/contactList';
import contactDetails from '../components/contactDetails';
import Header from '../containers/header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />        
        <div className="App-body">
          <Route exact path="/" component={intro} />
          <Route exact path="/authorize" component={authenticate} />
          <Route exact path="/contacts" component={contactList} />
          <Route exact path="/contact/:contactId" component={contactDetails} />
        </div>
      </div>
    );
  }
}

export default App