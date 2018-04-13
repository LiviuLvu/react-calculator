import undoable from 'redux-undo';

const initialState = {
  displayValue: '0',
  displayHistory: [],
  numberArray: [],
  operatorArray: [],
  writeNewNumber: true,
  memory: 0
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DISPLAY_VALUE':
      return {
        ...state,
        displayValue: displayNumberReducer(state, action.stringNumber),
        writeNewNumber: false,
      }
    case 'WRITE_DOT':
      return {
        ...state,
        displayValue: displayDotReducer(state.displayValue, action.dot),
        writeNewNumber: false,
      }
    case 'ON_OPERATOR':
      return {
        ...state,
        displayHistory: displayHistoryReducer(state, action.operator),
        numberArray: state.writeNewNumber ? state.numberArray : [...state.numberArray, state.displayValue],
        operatorArray: operatorArrayReducer(state, action.operator),
        writeNewNumber: true,
      }
    case 'CALC_TOTAL':
      return {
        ...state,
        displayHistory: [],
        displayValue: calculateTotal(state),
        numberArray: [],
        operatorArray: [],
        writeNewNumber: true,
      }
    case 'ALL_CLEAR':
      return {
        ...state,
        displayHistory: [],
        displayValue: '0',
        numberArray: [],
        operatorArray: [],
        writeNewNumber: true,
      }
    case 'MODIFY_NR':
      return {
        ...state,
        displayValue: modifyNumber(state.displayValue, action.modifier),
      }
    case 'MEM_CLEAR':
      return {
        ...state,
        memory: 0
      }
    case 'MEM_ADD':
      return {
        ...state,
        memory: state.memory +(+state.displayValue)
      }
    case 'MEM_SUBTRACT':
      return {
        ...state,
        memory: state.memory - (+state.displayValue)
      }
    case 'MEM_RECALL':
      return {
        ...state,
        writeNewNumber: false,
      }
    default:
      return state
  }
}

export default undoable(rootReducer, {});


function displayNumberReducer(state, stringNumber) {
  const stringIncludesDot = /\./g;
  if (stringIncludesDot.test(state.displayValue) && stringNumber === '.') return state.displayValue;
  if (state.displayValue === '0' && stringNumber === '0' ) return state.displayValue;
  return (state.writeNewNumber) ? stringNumber : state.displayValue + stringNumber;
}

function displayDotReducer(displayValue, dot) {
  const displayHasDot = /[\.,]/g;
  if (displayHasDot.test(displayValue)) return displayValue;
  return displayValue === '0' ? `0${dot}` : displayValue + dot;
}

function calculateTotal(state) {
  let totalArray = state.numberArray;
  if (totalArray.length === 1 && !state.writeNewNumber) totalArray.push(state.displayValue);
  if (totalArray.length < 2) return state.displayValue;

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

function operatorArrayReducer(state, operator) {
  let operatorArray = [...state.operatorArray];
  
  if (state.numberArray.length < 1)
    return [operator];
  else if (state.writeNewNumber && state.numberArray.length <= 1)
    return [operator];
  else if (state.writeNewNumber && state.numberArray.length > 1)
    return [...operatorArray.slice(0, -1), operator];
  else
    return [...operatorArray, operator];
}

function displayHistoryReducer(state, operator) {
  if (state.displayHistory.length < 2)
    return [state.displayValue, operator];
  else
    return [...state.displayHistory, state.displayValue, operator];
}

const operation = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  'x': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue
}