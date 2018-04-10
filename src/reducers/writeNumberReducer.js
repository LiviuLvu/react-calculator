export default function writeNumberReducer(state = {}, action) {
  switch (action.type) {
    case 'WRITE_NUMBER':
      return Object.assign(
        {}, 
        state,
        {numberArray: action.number}
      );
    default:
      return state
  }
}