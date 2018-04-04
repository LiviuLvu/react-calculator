import { writeNumber, writeOperationType, writeResult, clearAll, removeLastItem } from './WriteToDisplay';
import { modifyInput } from './Modifyers';

export function handleKeyEvent(state, key) {
  // write numbers and dot to display
  if ((/^[0-9.]+$/).test(key)) {
    return writeNumber(state.displayValue, state.writeNewNumber, state.numberArray, key)
  }

  // write operator
  if ((/^[+\-*/]+$/).test(key)) {
    return writeOperationType(state.writeNewNumber, state.operatorArray, key);
  }

  // calculate total
  if (key === 'Enter') {
    return writeResult(state.displayValue, state.writeNewNumber, state.numberArray, state.operatorArray);
  }

  // clear display and memory
  if (key === 'Escape') {
    return clearAll();
  }

  // clear last character
  // if (key === 'Backspace') {
  //   return removeLastItem(state.displayValue, state.numberArray);
  // }

  // modify last number in display
  if (key === '±' || key === '%') {
    return modifyInput(state, key);
  }
}