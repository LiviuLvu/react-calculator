const initialState = {
  displayValue: '0',
  numberArray: [],
  operatorArray: [],
  writeNewNumber: true,
  memory: 0
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DISPLAY_VALUE':
      return {
        displayValue: displayNumberReducer(state, action.stringNumber),
        numberArray: state.numberArray,
        operatorArray: state.operatorArray,
        writeNewNumber: false,
        memory: state.memory
      }
    case 'WRITE_DOT':
      return {
        displayValue: displayDotReducer(state.displayValue, action.dot),
        numberArray: state.numberArray,
        operatorArray: state.operatorArray,
        writeNewNumber: false,
        memory: state.memory
      }
    case 'ON_OPERATOR':
      return {
        displayValue: state.displayValue,
        numberArray: [...state.numberArray, state.displayValue],
        operatorArray: [...state.operatorArray, action.operator],
        writeNewNumber: true,
        memory: state.memory
      }
    case 'CALC_TOTAL':
      return {
        displayValue: calculateTotal(state),
        numberArray: [],
        operatorArray: [],
        writeNewNumber: true,
        memory: state.memory
      }
    case 'ALL_CLEAR':
      return {
        displayValue: '0',
        numberArray: [],
        operatorArray: [],
        writeNewNumber: true,
        memory: state.memory
      }
    case 'MODIFY_NR':
      return {
        displayValue: modifyNumber(state.displayValue, action.modifier),
        numberArray: state.numberArray,
        operatorArray: state.operatorArray,
        writeNewNumber: state.writeNewNumber,
        memory: state.memory
      }
    case 'MEM_CLEAR':
      return {
        displayValue: state.displayValue,
        numberArray: state.numberArray,
        operatorArray: state.operatorArray,
        writeNewNumber: state.writeNewNumber,
        memory: 0
      }
    case 'MEM_ADD':
      return {
        displayValue: state.displayValue,
        numberArray: state.numberArray,
        operatorArray: state.operatorArray,
        writeNewNumber: state.writeNewNumber,
        memory: state.memory +(+state.displayValue)
      }
    case 'MEM_SUBTRACT':
      return {
        displayValue: state.displayValue,
        numberArray: state.numberArray,
        operatorArray: state.operatorArray,
        writeNewNumber: state.writeNewNumber,
        memory: state.memory - (+state.displayValue)
      }
    case 'MEM_RECALL':
      return {
        displayValue: state.memory,
        numberArray: state.numberArray,
        operatorArray: state.operatorArray,
        writeNewNumber: false,
        memory: state.memory
      }
    default:
      return state
  }
}

export default rootReducer;


function displayNumberReducer(state, stringNumber) {
  const stringIncludesDot = /\./g;
  if (stringIncludesDot.test(state.displayValue) && stringNumber === '.') return state.displayValue;
  if (state.displayValue === '0' && stringNumber === '0' ) return state.displayValue;
  return (state.writeNewNumber) ? stringNumber : state.displayValue + stringNumber;
}

function displayDotReducer(displayValue, dot) {
  const displayHasDot = /\.,/g;
  if (displayHasDot.test(displayValue)) return displayValue;
  return displayValue === '0' ? '0.' : displayValue + dot;
}

function calculateTotal(state) {
  let totalArray = state.numberArray;
  if (totalArray.length === 1 && !state.writeNewNumber) totalArray.push(state.displayValue);

  let total = totalArray.reduce((prevNumber, nextNumber, currentIndex) => {
    let operator = state.operatorArray[currentIndex -1];
    return operation[operator](+prevNumber, +nextNumber);
  });
  return total;
}

function modifyNumber(display, modifier) {
  if (modifier === '%') return String(+display / 100);
  else if (modifier === '±') return +display * -1;
}

const operation = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue
}