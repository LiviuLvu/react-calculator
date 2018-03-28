export function calculate(obj, buttonName) {
  const { displayValue } = obj;

  if (isNumber(buttonName)) {
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

  function isNumber(item) {
    return /[0-9]+/.test(item);
  }

  if (buttonName === ',' || buttonName === '.') {
    if (displayValue.indexOf('.') === -1) {
      return {
        displayValue: displayValue + '.'
      }
    }
  }

  if (buttonName === 'AC' || buttonName === 'Escape') {
    return {
      displayValue: '0'
    }
  }

  if (buttonName === 'Backspace') {
    return {
      displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
    }
  }

  if (buttonName === '±') {
    return {
      displayValue: parseFloat(displayValue) * -1
    }
  }

  if (buttonName === '%') {
    if (displayValue === '0')
      return
    return {
      displayValue: displayValue / 100
    }
  }

}