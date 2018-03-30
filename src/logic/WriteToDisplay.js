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
    waitingForNumber: false,
    wasExpressionEvaluated: false
  }
}


// add dot to display
export function writeDot(state) {
  let {displayValue, waitingForNumber} = state;
  let stringArray = String(displayValue).split(' ');
  let ifNumberHasDot = stringArray[stringArray.length - 1];

  if ((/\./g).test(ifNumberHasDot)) {
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
    let stringArray = displayValue.split(' ');
    let removeLastOperator =  stringArray.slice(0, stringArray.length - 2);
    displayValue = removeLastOperator.join(' ');
  }
  
  return {
    displayValue: displayValue + ' ' + operator + ' ',
    waitingForNumber: true,
    wasExpressionEvaluated: false
  }
}
 

// calculate display value
export function writeResult(state) {
  let {displayValue, waitingForNumber} = state;
  if (waitingForNumber) {
    // eval breaks if string ends with operation character
    displayValue = displayValue.slice(0, displayValue.length - 2);
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
    displayValue: '0',
    waitingForNumber: false
  }
}