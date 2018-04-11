import { combineReducers } from 'redux';
import writeNumberReducer from './writeNumberReducer';
import writeDotReducer from './writeDotReducer';

const rootReducer = combineReducers({
  writeNumberReducer,
  writeDotReducer
});

export default rootReducer;