import { writeNumber, writeOperator, writeResult } from './WriteToDisplay';

export function handleKeyEvent(state, key) {
  // convert comma to dot
  key = (key === ',') ? '.' : key;
  
  // write numbers and dot to display
  if ((/^[0-9.]+$/).test(key)) {
    return writeNumber(state, key);
  }
}