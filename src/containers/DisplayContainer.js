import { connect } from 'react-redux';
// import { getDisplayValue } from '../actions';
import Display from '../components/display/Display';

const mapStateToProps = (state) => ({
  displayValue: state.displayValue,
});

export default connect(mapStateToProps)(Display);