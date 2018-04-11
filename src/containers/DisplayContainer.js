import { connect } from 'react-redux';
import Display from '../components/display/Display';

const mapStateToProps = state => ({
  displayValue: state.stateUpdateReducer.displayValue
});

export default connect(mapStateToProps)(Display);