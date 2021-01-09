import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import testreducer from './src/reducers/test_reducer';
import loginreducer from './src/reducers/login_reducer';
const store = createStore(
  combineReducers({
    testreducer,
    loginreducer,
  }),
  applyMiddleware(thunk),
);
export default store;
