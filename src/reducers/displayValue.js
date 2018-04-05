import { combineReducers } from 'redux';

function calculatorApp(state = initialState, action) {
  switch (action.type) {
    case SET_DISPLAY_VALUE:
      return Object.assign({}, state, {
        displayValue: action.stringNumber
      })
    default:
      return state
  }
}