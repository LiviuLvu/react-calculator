export function memoryClear() {
  console.log('clear')
}
export function memoryAdd(numberArray, memory) {  
  const currentNumber = +numberArray[numberArray.length - 1];
  let updateMemory = memory + currentNumber;
  if(currentNumber === '0') updateMemory = memory;
  
  return {
    memory: updateMemory
  }
}
export function memorySubtract() {
  console.log('subtract')
}
export function memoryRecall() {
  console.log('recall')
}