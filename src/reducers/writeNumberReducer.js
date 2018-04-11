const initialState = {
  displayValue: 0,
  numberArray: ['0'],
  writeNewNumber: false
}

export default function writeNumberReducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  let currentIndex = newState.numberArray.length-1;
  let numberInput = action.number ? action.number : '0';
  let numberArray = newState.numberArray;

  newState.writeNewNumber ? writeNew() : editCurrent();
  
  function writeNew() {
    numberArray.push(numberInput);
    currentIndex = numberArray.length-1;
    newState.writeNewNumber = false;
  };

  function editCurrent() {
    if ( numberArray.length < 2 && numberArray[0] === '0' ) {
      numberArray[currentIndex] = numberInput;
    } else {
      numberArray[currentIndex] += String(numberInput);
    }
  };

  newState.displayValue = numberArray[currentIndex];

  switch (action.type) {
    case 'WRITE_NUMBER':
      return newState;
    default:
      return state
  }
}