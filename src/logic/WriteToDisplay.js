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
  const hasDot = /\.$|\. $/g;
  if (hasDot.test(displayValue)) {
    return;
  }
  if (waitingForNumber) {
    displayValue = displayValue + '0';
  }
  if (!displayValue) {
    displayValue = '0';
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
  const endsWithOperator = /[+\-*\/] ?$/g;
  if (!displayValue) return;
  if (endsWithOperator.test(displayValue)) {
    displayValue = displayValue.slice(0, -2);
  }
  return {
    displayValue: displayValue + ' ' + operator + ' ',
    waitingForNumber: true,
    wasExpressionEvaluated: false
  }
}
 

// calculate display value
export function writeResult(state) {
  let {displayValue} = state;

  const endsWithOperator = /[+\-*\/] ?$/g;
  if (endsWithOperator.test(displayValue)) {
    displayValue = displayValue.slice(0, -2);
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


// remove last character from display
export function removeLastItem(state) {
  let {displayValue, waitingForNumber} = state;
  if (!displayValue) return {};
  let lastItemRemoved = String(displayValue).slice(0, -1);
  if (!lastItemRemoved) lastItemRemoved = '0'; 
  return {
    displayValue: lastItemRemoved,
    waitingForNumber: false
  }
}