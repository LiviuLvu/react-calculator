import { combineReducers } from 'redux';
import numberArray from './writeNumberReducer';

const rootReducer = combineReducers({
  // accesed throughout application as: state.numberArray
  numberArray
});

export default rootReducer;