export function memoryClear() {
  return {
    memory: 0
  }
}
export function memoryAdd(numberArray, memory) {  
  const currentNumber = +numberArray[numberArray.length - 1];
  let updateMemory = memory + currentNumber;
  if(currentNumber === '0') updateMemory = memory;

  return {
    memory: updateMemory
  }
}
export function memorySubtract(numberArray, memory) {
  const currentNumber = +numberArray[numberArray.length - 1];
  let updateMemory = memory - currentNumber;
  if(currentNumber === '0') updateMemory = memory;
  
  return {
    memory: updateMemory
  }
}
export function memoryRecall(displayValue, writeNewNumber, numberArray, memory) {
  return {
    displayValue: memory,
    numberArray: numberArray.push(memory),
    writeNewNumber: false
  }
}