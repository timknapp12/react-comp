import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {unregister} from './registerServiceWorker';
import { Provider } from "react-redux";
import store from './store';
import {Hashrouter} from 'router';


ReactDOM.render(
    <Provider store={store}>
        <Hashrouter>
        <App />
        </Hashrouter>
    </Provider>
, document.getElementById('root'));
unregister();
