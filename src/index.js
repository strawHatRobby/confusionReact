import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
// always import htis before any other custom css cause of how css preceedance work
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>

    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
