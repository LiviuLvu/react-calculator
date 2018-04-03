// modify last displayed number
export function modifyInput(displayValue, numberMemory, modifier) {
  const currentIndex = numberMemory.length - 1;
  
  if (modifier === '%') {
    numberMemory[currentIndex] = +numberMemory[currentIndex] / 100;
  }
  if (modifier === '±') {
    numberMemory[currentIndex] = +numberMemory[currentIndex] * -1;
  }
  return {
    displayValue: numberMemory[currentIndex],
    numberMemory: numberMemory
  }
}