import { connect } from 'react-redux';
import { writeNumber } from '../actions';
import MainControls from '../components/main-controls/MainControls';

const mapDispatchToProps = dispatch => ({
  numberInput: number => dispatch(writeNumber(number)),
})

export default connect(null, mapDispatchToProps)(MainControls);
