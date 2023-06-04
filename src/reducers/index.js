import { combineReducers } from 'redux';
import launchReducer from './launchReducer';
import analyticsReducer from './analyticsReducer'; // Import the analyticsReducer

const rootReducer = combineReducers({
  launches: launchReducer,
  analytics: analyticsReducer, 
});

export default rootReducer;
