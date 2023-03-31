import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

const rootReducers = combineReducers({
  login: AuthReducer,
  
});

export default rootReducers;