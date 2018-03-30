function removeOperatorAndTrimLastNumber(modified, displayValue, waitingForNumber) {
  let stringArray = displayValue.split(' ');
  if(waitingForNumber) {stringArray = stringArray.slice(0, stringArray.length - 2)}
  return {
    lastNumber: stringArray.slice(-1),
    trimDisplayValue: stringArray.slice(0, stringArray.length - 1).join(' ')
  }
}

// modify last displayed number
export function modifyInput(state, modifier) {
  let {displayValue, waitingForNumber} = state;
  let modified = {
    lastNumber: displayValue, 
    trimDisplayValue: ''
  }

  if ((/[-*+\/]/g).test(displayValue)) {
    modified = removeOperatorAndTrimLastNumber(modified, displayValue, waitingForNumber);
  }
  if (modifier === '%') {
    const percentage = modified.lastNumber / 100;
    return {
      displayValue: modified.trimDisplayValue + ' ' + percentage,
      waitingForNumber: false
    }
  }
  if (modifier === '±') {
    const togglePolarity = parseFloat(modified.lastNumber) * -1;
    return {
      displayValue: modified.trimDisplayValue + ' ' + togglePolarity,
      waitingForNumber: false
    }
  }
}