import { connect } from 'react-redux';
import { writeNumber, writeDot } from '../actions';
import MainControls from '../components/main-controls/MainControls';

const mapDispatchToProps = dispatch => ({
  numberInput: number => dispatch(writeNumber(number)),
  dotInput: dot => dispatch(writeDot(dot))
})

export default connect(null, mapDispatchToProps)(MainControls);
