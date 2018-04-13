import { connect } from 'react-redux';
import Display from '../components/display/Display';

const mapStateToProps = state => ({
  displayValue: state.present.displayValue,
  displayHistory: state.present.displayHistory
});

export default connect(mapStateToProps)(Display);