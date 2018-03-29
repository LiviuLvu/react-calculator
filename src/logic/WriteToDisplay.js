// add numbers to displayValue
export function writeNumber(state, number) {
  const {displayValue} = state;
  
  if (String(displayValue) === '0') {
    return {
      displayValue: number,
    };
  }
  return {
    displayValue: displayValue + number,
  }
}

// add operators to displayValue
export function writeOperator(state, operator) {
  const {displayValue} = state;
  return {
    displayValue: displayValue + operator
  }
}

// calculate displayValue
export function writeResult(state) {
  const {displayValue} = state;
  return {
    displayValue: eval(displayValue)
  }
}

// clean memory and display
export function clearAll() {
  return {
    displayValue: '0'
  }
}