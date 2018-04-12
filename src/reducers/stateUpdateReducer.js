const initialState = {
  displayValue: '0',
  numberArray: [],
  operatorArray: [],
  writeNewNumber: true
}

function stateUpdateReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DISPLAY_VALUE':
      return {
        displayValue: displayNumberReducer(state, action.stringNumber),
        numberArray: state.numberArray,
        operatorArray: state.operatorArray,
        writeNewNumber: false
      }
    case 'WRITE_DOT':
      return {
        displayValue: displayDotReducer(state.displayValue, action.dot),
        numberArray: state.numberArray,
        operatorArray: state.operatorArray,
        writeNewNumber: false
      }
    case 'ON_OPERATOR':
      return {
        displayValue: state.displayValue,
        numberArray: [...state.numberArray, state.displayValue],
        operatorArray: [...state.operatorArray, action.operator],
        writeNewNumber: true
      }
    case 'CALC_TOTAL':
      return {
        displayValue: calculateTotal(state),
        numberArray: [],
        operatorArray: [],
        writeNewNumber: true
      }
    default:
      return state
  }
}
export default stateUpdateReducer;


function displayNumberReducer(state, stringNumber) {
  const stringIncludesDot = /\./g;
  if (stringIncludesDot.test(state.displayValue) && stringNumber === '.') return state.displayValue;
  if (state.displayValue === '0' && stringNumber === '0' ) return state.displayValue;
  return (state.writeNewNumber) ? stringNumber : state.displayValue + stringNumber;
}

function displayDotReducer(displayValue, dot) {
  const displayHasDot = /\./g;
  if (displayHasDot.test(displayValue)) return displayValue;
  return displayValue === '0' ? '0.' : displayValue + dot;
}

function calculateTotal(state) {
  let total = state.numberArray.reduce((prevNumber, nextNumber, currentIndex) => {
    let operator = state.operatorArray[currentIndex -1];
    return operation[operator](+prevNumber, +nextNumber);
  });
  return total;
}

const operation = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue
}