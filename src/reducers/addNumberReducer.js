export default function addNumberReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_NUMBER':
      return Object.assign(
        {}, 
        state,
        {numberArray: action.number}
      );
    default:
      return state
  }
}