import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import {AlertReducer} from './AlertReducer';
import WorkerReducer from './WorkerReducer';

const rootReducers = combineReducers({
  login: AuthReducer,
  alert:AlertReducer,
  workerAcc:WorkerReducer
  
});

export default rootReducers;