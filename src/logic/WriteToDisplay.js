// update display using memory array
export function writeNumber(displayValue, newMemoryNumber, numbersMemory, numberInput) {
  let currentIndex = numbersMemory.length-1;

  newMemoryNumber ? writeNewNumber() : editNumber();
  
  function writeNewNumber() {
    console.log(numbersMemory);
    numbersMemory.push(numberInput);
  };

  function editNumber() {
    if ( numbersMemory.length < 2 && numbersMemory[0]==='0') {
      numbersMemory[currentIndex] = numberInput;
    } else {
      numbersMemory[currentIndex] += String(numberInput);
    }
  };

  return {
    displayValue: numbersMemory[currentIndex],
    numbersMemory: numbersMemory,
    newMemoryNumber: false
  }

}


// add dot to display
export function writeDot(displayValue) {
  const hasDot = /\.$|\. $/g;
  if (hasDot.test(displayValue)) {
    return;
  }
  return {
    displayValue: displayValue + '.',
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