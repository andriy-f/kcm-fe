import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.hydrate(<Root />, document.getElementById('root'));
registerServiceWorker();
