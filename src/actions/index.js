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
export const allClear = () => ({
  type: 'ALL_CLEAR'
})
export const modifyNumber = modifier => ({
  type: 'MODIFY_NR',
  modifier
})

export const memClear = () => ({
  type: 'MEM_CLEAR'
})
export const memAdd = () => ({
  type: 'MEM_ADD'
})
export const memSubtract = () => ({
  type: 'MEM_SUBTRACT'
})
export const memRecall = () => ({
  type: 'MEM_RECALL'
})