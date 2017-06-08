import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import intro from '../components/intro';
import contactList from '../components/contactList';
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
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="App-body">
          <Route exact path="/" component={intro} />
          <Route exact path="/contacts" component={contactList} />
          <Route exact path="/contact/:contactId" component={contactDetails} />
        </div>
      </div>
    );
  }
}

export default App;
