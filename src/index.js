import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
require('newrelic')

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
