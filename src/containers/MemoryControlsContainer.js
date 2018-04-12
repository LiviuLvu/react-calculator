import { connect } from 'react-redux';
import { memClear, memAdd, memSubtract, memRecall } from '../actions';
import MemoryControls from '../components/memory-controls/MemoryControls';

const mapDispatchToProps = dispatch => ({
  memClear: () => dispatch(memClear()),
  memAdd: () => dispatch(memAdd()),
  memSubtract: () => dispatch(memSubtract()),
  memRecall: () => dispatch(memRecall())
})

export default connect(null, mapDispatchToProps)(MemoryControls);