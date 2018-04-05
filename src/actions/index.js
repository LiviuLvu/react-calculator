let nextNumberId = 0
let nextOperatorId = 0

export const displayValue = string => ({
  type: 'SET_DISPLAY_VALUE',
  string
})

export const writeNewNumber = state => ({
  type: 'TOGGLE_WRITE_NEW_NUMBER',
  state
})

export const addNumber = number => ({
  type: 'ADD_NUMBER',
  id: nextNumberId++,
  number
})

export const addOperator = number => ({
  type: 'ADD_OPERATOR',
  id: nextOperatorId++,
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

export const VisibilityFilters = {
  SET_DISPLAY_VALUE: 'SET_DISPLAY_VALUE',
  TOGGLE_WRITE_NEW_NUMBER: 'TOGGLE_WRITE_NEW_NUMBER',
  ADD_NUMBER: 'ADD_NUMBER',
  ADD_OPERATOR: 'ADD_OPERATOR',
  TOGGLE_IS_SCIENTIFIC: 'TOGGLE_IS_SCIENTIFIC',
  SET_MEMORY_VALUE: 'SET_MEMORY_VALUE'
}