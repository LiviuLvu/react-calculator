import { combineReducers } from 'redux';
import writeNumber from './writeNumberReducer';
import displayValueReducer from './displayValueReducer';

const rootReducer = combineReducers({
  writeNumber,
  displayValueReducer
});

export default rootReducer;