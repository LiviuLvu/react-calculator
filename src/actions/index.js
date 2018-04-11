export const displayValue = stringNumber => ({
  type: 'SET_DISPLAY_VALUE',
  stringNumber
})

export const shouldWriteNew = state => ({
  type: 'SHOULD_WRITE_NEW_NUMBER',
  state
})

export const writeNumber = number => ({
  type: 'WRITE_NUMBER',
  number
})

export const addOperator = number => ({
  type: 'ADD_OPERATOR',
  number
})

export const isScientific = state => ({
  type: 'TOGGLE_IS_SCIENTIFIC',
  state
})

export const memory = number => ({
  type: 'SET_MEMORY_VALUE',
  number
})