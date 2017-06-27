import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import intro from '../components/intro';
import authenticate from '../containers/authenticate';
import contactList from '../containers/contactList';
import contactDetails from '../components/contactDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>K Contact Manager React</h2>
          <ul className="App-nav">
            <li>
              <Link to="/">Intro</Link>
            </li>
            <li>
              <Link to="/authorize">Authorize</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
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

export default App;
