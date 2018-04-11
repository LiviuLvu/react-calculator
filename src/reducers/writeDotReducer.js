const initialState = {
  displayValue: 0,
  numberArray: ['0'],
  writeNewNumber: false
}
export default function writeDotReducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  let numberArray = newState.numberArray;
  let currentIndex = numberArray.length - 1;
  const HAS_DOT = /\./g;

  if (HAS_DOT.test(numberArray[currentIndex])) {
    return state;
  }
  
  newState.numberArray[currentIndex] = numberArray[currentIndex] += '.'
  newState.displayValue = numberArray[currentIndex];

  switch (action.type) {
    case 'WRITE_DOT':
      return newState;
    default:
      return state
  }
}