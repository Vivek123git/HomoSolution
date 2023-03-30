import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  login: AuthReducer,
  
});

export default rootReducer;