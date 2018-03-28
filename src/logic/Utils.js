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

  
}