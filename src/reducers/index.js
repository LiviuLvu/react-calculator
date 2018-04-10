import { combineReducers } from 'redux';
import numberArray from './addNumberReducer';

const rootReducer = combineReducers({
  // accesed throughout application as: state.numberArray
  numberArray
});

export default rootReducer;