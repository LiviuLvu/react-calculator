import { connect } from 'react-redux';
// import { getDisplayValue } from '../actions';
import Display from '../components/display/Display';

const mapStateToProps = (state) => ({
  // displayValue: state.numberArray,
  // below displayValue does not reach the Display component. There it is undefined.
  displayValue: '0.0'
});

connect(mapStateToProps)(Display);