import { connect } from 'react-redux';
import { addNumber } from '../actions';
import MainControls from '../components/main-controls/MainControls';

const mapDispatchToProps = dispatch => ({
  numberInput: number => dispatch(addNumber(number)),
})

export default connect(null, mapDispatchToProps)(MainControls);
