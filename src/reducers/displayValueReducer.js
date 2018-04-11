export default function displayValueReducer(state = '0', action) {
  switch(action.type) {
    case 'SET_DISPLAY_VALUE':
      return action.displayValue
    default:
      return state;
  }
}