// add numbers to displayValue
export function writeNumber(state, number) {
  let {displayValue, wasExpressionEvaluated, waitingForNumber} = state;

  if (wasExpressionEvaluated) {
    displayValue = ''
  }
  if (String(displayValue) === '0') {
    return {
      displayValue: number,
    };
  }

  return {
    displayValue: displayValue + number,
    waitingForNumber: false,
    wasExpressionEvaluated: false
  }
}


// add dot to display
export function writeDot(state) {
  let {displayValue, waitingForNumber, wasExpressionEvaluated} = state;

  if (String(displayValue).slice(-1) === '.') {
    return {}
  }
  if (waitingForNumber) {
    displayValue = displayValue + '0';
  }
  
  return {
    displayValue: displayValue + '.',
    wasExpressionEvaluated: false,
    waitingForNumber: false
  };
}


// add operators to displayValue
export function writeOperationType(state, operator) {
  let {displayValue, waitingForNumber} = state;
  
  if (waitingForNumber) {
    const removedLastOperator = displayValue.slice(0, displayValue.length - 1);
    displayValue = removedLastOperator;
  }
  
  return {
    displayValue: displayValue + operator,
    waitingForNumber: true,
    wasExpressionEvaluated: false
  }
}


// calculate display value
export function writeResult(state) {
  let {displayValue, waitingForNumber} = state;
  if (waitingForNumber) {
    displayValue = displayValue.slice(0, displayValue.length - 1);
  }
  return {
    displayValue: eval(displayValue),
    waitingForNumber: false,
    wasExpressionEvaluated: true
  }
}


// clean memory and display
export function clearAll() {
  return {
    displayValue: '0'
  }
}