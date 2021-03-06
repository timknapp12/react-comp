import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import { Provider } from "react-redux";
import store from './store';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
    //HashRouter 42D
    <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
    </HashRouter>
, document.getElementById('root'));
unregister();
