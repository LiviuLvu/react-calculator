const initialState = {
  displayValue: 0,
  numberArray: ['0'],
  writeNewNumber: false
}

function writeNumberReducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  let currentIndex = newState.numberArray.length-1;
  let numberInput = action.number ? action.number : '0';
  let numberArray = newState.numberArray;

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

  function checkBeforeWriteDot() {
    const HAS_DOT = /\./g;
    if (HAS_DOT.test(numberArray[currentIndex])) {
      return state;
    }
    newState.numberArray[currentIndex] = numberArray[currentIndex] += '.'
  }


  switch (action.type) {
    case 'WRITE_NUMBER':
      newState.writeNewNumber ? writeNew() : editCurrent();
      return {
        displayValue: numberArray[currentIndex],
        numberArray,
        writeNewNumber: false
      }

    case 'WRITE_DOT':
      checkBeforeWriteDot();
      return {
        displayValue: numberArray[currentIndex],
        numberArray,
        writeNewNumber: false
      }
    default:
      return state
  }
}

export default writeNumberReducer;