// add numbers to displayValue
export function writeNumber(state, number) {
  let {displayValue, wasExpressionEvaluated} = state;
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
    waitingForOperator: false,
    wasExpressionEvaluated: false
  }
}

// add operators to displayValue
export function writeOperationType(state, operator) {
  let {displayValue, waitingForOperator} = state;
  if (waitingForOperator) {
    const removedLastOperator = displayValue.slice(0, displayValue.length - 1);
    return {
      displayValue: removedLastOperator + operator,
      waitingForOperator: true,
      wasExpressionEvaluated: false
    };
  }
  
  return {
    displayValue: displayValue + operator,
    waitingForOperator: true,
    wasExpressionEvaluated: false
  }
}

// calculate display value
export function writeResult(state) {
  let {displayValue, waitingForOperator} = state;
  if (waitingForOperator) {
    displayValue = displayValue.slice(0, displayValue.length - 1);
  }
  return {
    displayValue: eval(displayValue),
    waitingForOperator: false,
    wasExpressionEvaluated: true
  }
}

// clean memory and display
export function clearAll() {
  return {
    displayValue: '0'
  }
}