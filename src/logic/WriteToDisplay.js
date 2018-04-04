const operation = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue
}

// add numbers to memory and update display
export function writeNumber(displayValue, writeNewNumber, numberArray, numberInput) {
  let currentIndex = numberArray.length-1;

  writeNewNumber ? writeNew() : editCurrent();
  
  function writeNew() {
    numberArray.push(numberInput);
    currentIndex = numberArray.length-1;
  };

  function editCurrent() {
    if ( numberArray.length < 2 && numberArray[0]==='0') {
      numberArray[currentIndex] = numberInput;
    } else {
      numberArray[currentIndex] += String(numberInput);
    }
  };
  
  return {
    displayValue: numberArray[currentIndex],
    numberArray: numberArray,
    writeNewNumber: false
  }
}


// add dot to number and update display
export function writeDot(numberArray) {
  const currentIndex = numberArray.length - 1;
  const hasDot = /\./g;
  if (hasDot.test(numberArray[currentIndex])) {
    return;
  }
  numberArray[currentIndex] = numberArray[currentIndex] += '.'

  return {
    displayValue: numberArray,
    numberArray: numberArray,
    writeNewNumber: false
  };
}


// add operators to memory
export function writeOperationType(writeNewNumber, operatorArray, operator) {
  let currentOperator = operatorArray.length - 1;
  !writeNewNumber ?
    operatorArray.push(operator) :
    operatorArray[currentOperator] = operator;

  return {
    writeNewNumber: true,
    operatorArray: operatorArray
  }
}
 

// calculate and display total
export function writeResult(displayValue, writeNewNumber, numberArray, operatorArray) {
  let total = numberArray.reduce((prevNumber, nextNumber, currentIndex) => {
    let operator = operatorArray[currentIndex -1];
    return operation[operator](+prevNumber, +nextNumber);
  });

  return {
    displayValue: total,
    writeNewNumber: false,
    numberArray: ['0'],
    operatorArray: []
  }
}


// clean memory and display
export function clearAll() {
  return {
    displayValue: '0',
    writeNewNumber: false,
    numberArray: ['0'],
    operatorArray: []
  }
}


// remove last character from display
// export function removeLastItem(displayValue, numberArray) {
//   const currentItem = numberArray.length - 1;
//   const currentItemString = numberArray[currentItem];
//   numberArray[currentItem] = currentItemString.substr(0, currentItemString.length - 1);
//   console.log(numberArray)
//   return {
//     displayValue: numberArray[currentItem],
//     numberArray: numberArray
//   }
// }