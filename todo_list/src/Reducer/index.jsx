import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AlertReducer from './AlertReducer';

const rootReducers = combineReducers({
  login: AuthReducer,
  alert:AlertReducer,
  
});

export default rootReducers;