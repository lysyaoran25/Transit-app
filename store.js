import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import testreducer from './src/reducers/test_reducer';
import loginreducer from './src/reducers/login_reducer';
import listreducer from './src/reducers/list_reducer';
const store = createStore(
  combineReducers({
    testreducer,
    loginreducer,
    listreducer,
  }),
  applyMiddleware(thunk),
);
export default store;
