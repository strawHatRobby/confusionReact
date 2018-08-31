import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// always import htis before any other custom css cause of how css preceedance work
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
