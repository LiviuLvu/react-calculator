import { writeNumber, writeOperationType, writeResult, clearAll } from './WriteToDisplay';
import { modifyInput } from './Modifyers';

export function handleKeyEvent(state, key) {
  // write numbers and dot to display
  if ((/^[0-9.]+$/).test(key)) {
    return writeNumber(state, key);
  }

  // write operator
  if ((/^[+\-*/]+$/).test(key)) {
    return writeOperationType(state, key);
  }

  // calculate total
  if (key === 'Enter') {
    return writeResult(state);
  }

  // clear display and memory
  if (key === 'Escape') {
    return clearAll();
  }

  // modify last number in display
  if (key === '±' || key === '%') {
    return modifyInput(state, key);
  }
}