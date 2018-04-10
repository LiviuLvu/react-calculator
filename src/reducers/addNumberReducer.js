export default function addNumberReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_NUMBER':
      return [
        ...state,
        {
          id: action.id,
          number: action.number
        }
      ];
    default:
      return state
  }
}