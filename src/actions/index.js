export const displayValue = stringNumber => ({
  type: 'SET_DISPLAY_VALUE',
  stringNumber
})

export const writeDot = dot => ({
  type: 'WRITE_DOT',
  dot
})

export const memoryNumberAndOperator = operator => ({
  type: 'ON_OPERATOR',
  operator
})

export const calculateTotal = () => ({
  type: 'CALC_TOTAL'
})

export const isScientific = state => ({
  type: 'TOGGLE_IS_SCIENTIFIC',
  state
})

export const memory = number => ({
  type: 'SET_MEMORY_VALUE',
  number
})