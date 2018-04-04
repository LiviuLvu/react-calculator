// modify last displayed number
export function modifyInput(displayValue, numberArray, modifier) {
  const currentIndex = numberArray.length - 1;
  
  if (modifier === '%') {
    numberArray[currentIndex] = +numberArray[currentIndex] / 100;
  }
  if (modifier === '±') {
    numberArray[currentIndex] = +numberArray[currentIndex] * -1;
  }
  return {
    displayValue: numberArray[currentIndex],
    numberArray: numberArray
  }
}