import { connect } from 'react-redux';
import { displayValue, writeDot, memoryNumberAndOperator, calculateTotal, allClear, modifyNumber } from '../actions';
import MainControls from '../components/main-controls/MainControls';

const mapDispatchToProps = dispatch => ({
  displayValue: stringNumber => dispatch(displayValue(stringNumber)),
  dotInput: string => dispatch(writeDot(string)),
  operatorInput: operator => dispatch(memoryNumberAndOperator(operator)),
  calculateTotal: () => dispatch(calculateTotal()),
  allClear: () => dispatch(allClear()),
  modifyNumber: modifier => dispatch(modifyNumber(modifier))
})

export default connect(null, mapDispatchToProps)(MainControls);
