const operation = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue
}

// add numbers to memory and update display
export function writeNumber(displayValue, writeNewNumber, numberMemory, numberInput) {
  const currentIndex = numberMemory.length-1;

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


// add dot to number and update display
export function writeDot(numberMemory) {
  const currentIndex = numberMemory.length - 1;
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


// add operators to memory
export function writeOperationType(writeNewNumber, operatorMemory, operator) {
  let currentOperator = operatorMemory.length - 1;
  !writeNewNumber ?
    operatorMemory.push(operator) :
    operatorMemory[currentOperator] = operator;

  return {
    writeNewNumber: true,
    operatorMemory: operatorMemory
  }
}
 

// calculate and display total
export function writeResult(displayValue, writeNewNumber, numberMemory, operatorMemory) {
  let total = numberMemory.reduce((prevNumber, nextNumber, currentIndex) => {
    let operator = operatorMemory[currentIndex -1];
    return operation[operator](+prevNumber, +nextNumber);
  });

  return {
    displayValue: total,
    writeNewNumber: false,
    numberMemory: ['0'],
    operatorMemory: []
  }
}


// clean memory and display
export function clearAll() {
  return {
    displayValue: '0',
    writeNewNumber: false,
    numberMemory: ['0'],
    operatorMemory: []
  }
}


// remove last character from display
// export function removeLastItem(displayValue, numberMemory) {
//   const currentItem = numberMemory.length - 1;
//   const currentItemString = numberMemory[currentItem];
//   numberMemory[currentItem] = currentItemString.substr(0, currentItemString.length - 1);
//   console.log(numberMemory)
//   return {
//     displayValue: numberMemory[currentItem],
//     numberMemory: numberMemory
//   }
// }