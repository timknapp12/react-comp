import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';

        // redux promise middleware  43K

        
export default createStore(reducer, applyMiddleware(promiseMiddleware()));