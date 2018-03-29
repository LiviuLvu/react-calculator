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

// modify value inside input
export function modifyInput(state, modifier) {
  let {displayValue} = state;
  let lastNumber = displayValue;
  let trimDisplayValue = '';
  
  // does string contain operation symbols?
  if ((/[-*+\/]/g).test(displayValue)) {
    // select last floating point number
    const regexp = /([-+]?([0-9]*\.[0-9]+|[0-9]+))+/g;
    let stringNumber = regexp.exec(String(displayValue));
    lastNumber = parseInt(stringNumber[stringNumber.length-1]);
    trimDisplayValue = displayValue.slice(0, displayValue.length - String(lastNumber).length);
  }
  if (modifier === '%') {
    const percentage = lastNumber / 100;
    return {
      displayValue: trimDisplayValue + percentage
    }
  }
  if (modifier === '±') {
    console.log(lastNumber);
    const toggleInteger = parseFloat(lastNumber) * -1;
    return {
      displayValue: trimDisplayValue + toggleInteger
    }
  }
}
 

// calculate display value
export function writeResult(state) {
  let {displayValue, waitingForNumber} = state;
  if (waitingForNumber) {
    // eval breaks if string ends with operation character
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