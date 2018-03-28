function isNumber(item) {
  return /[0-9]+/.test(item);
}

const operations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}

export function calculate(obj, buttonName) {
  const { memoryValue, displayValue, operator, waitingForOperand } = obj;

  // write integer to display
  if (isNumber(buttonName)) {
    if (waitingForOperand) {
      return {
        displayValue: buttonName,
        waitingForOperand: false
      }
    }
    if (buttonName === '0' && displayValue === '0') {
      return {};
    }
    if (displayValue === '0') {
      return {
        displayValue: buttonName,
      };
    }
    return {
      displayValue: displayValue + buttonName,
    }
  }

  // write comma to display
  if (buttonName === ',' || buttonName === '.') {
    if (waitingForOperand) {
      return {
        displayValue: '.',
        waitingForOperand: false
      }
    } else if (displayValue.indexOf('.') === -1) {
      return {
        displayValue: displayValue + '.',
        waitingForOperand: false
      }
    }
  }

  // clear display and memory
  if (buttonName === 'AC' || buttonName === 'Escape') {
    return {
      memoryValue: null,
      displayValue: '0'
    }
  }

  // remove last number entered
  if (buttonName === 'Backspace') {
    return {
      displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
    }
  }

  // toggle number polarity
  if (buttonName === '±') {
    return {
      displayValue: parseFloat(displayValue) * -1
    }
  }

  // procentage of integer
  if (buttonName === '%') {
    if (displayValue === '0')
      return
    return {
      displayValue: parseFloat(displayValue) / 100
    }
  }

  // operators
  if (buttonName === '+' || buttonName === '-' || buttonName === '*' || buttonName === '/') {
    const inputValue = parseFloat(displayValue)
    if (memoryValue == null) {
      return {
        memoryValue: inputValue,
        operator: buttonName,
        waitingForOperand: true
      }
    } else if (operator) {
      const currentValue = memoryValue || 0;
      const newValue = operations[operator](currentValue, inputValue);

      return {
        memoryValue: newValue,
        displayValue: newValue
      }
    }
    
    return {
      operator: buttonName,
      waitingForOperand: true
    }
  }

  // final result 
  if (buttonName === '=' || buttonName === 'Enter') {
    const inputValue = parseFloat(displayValue)
    const currentValue = memoryValue || 0;
    const newValue = operations[operator](currentValue, inputValue);
    return {
      memoryValue: newValue,
      displayValue: newValue,
      waitingForOperand: false
    }
  }
}