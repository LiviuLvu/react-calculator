// update display using memory array
export function writeNumber(displayValue, writeNewNumber, numberMemory, numberInput) {
  let currentIndex = numberMemory.length-1;

  writeNewNumber ? writeNew() : editCurrent();
  
  function writeNew() {
    numberMemory.push(numberInput);
  };

  function editCurrent() {
    if ( numberMemory.length < 2 && numberMemory[0]==='0') {
      numberMemory[currentIndex] = numberInput;
    } else {
      numberMemory[currentIndex] += String(numberInput);
    }
  };

  return {
    displayValue: numberMemory[currentIndex],
    numberMemory: numberMemory,
    writeNewNumber: false
  }
}


// add dot to display
export function writeDot(numberMemory) {
  let currentIndex = numberMemory.length - 1;
  const hasDot = /\./g;
  if (hasDot.test(numberMemory[currentIndex])) {
    return;
  }
  numberMemory[currentIndex] = numberMemory[currentIndex] += '.'

  return {
    displayValue: numberMemory,
    numberMemory: numberMemory,
    writeNewNumber: false
  };
}


// add operators to displayValue
export function writeOperationType(writeNewNumber, operatorsMemory, operator) {
  let currentOperator = operatorsMemory.length - 1;
  !writeNewNumber ?
    operatorsMemory.push(operator) :
    operatorsMemory[currentOperator] = operator;

  return {
    writeNewNumber: true,
    operatorsMemory: operatorsMemory
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