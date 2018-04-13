import React, { Component } from 'react';
import'./CalculatorApp.css';

import DisplayContainer from './containers/DisplayContainer';
import MainControlsContainer from './containers/MainControlsContainer';
import MemoryControlsContainer from './containers/MemoryControlsContainer';
import ButtonScientific from './components/button-scientific/ButtonScientific';
import UndoRedo from './containers/UndoRedo';

class CalculatorApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isScientific: false
    }
  }

  isScientificVisible = () => {	
    this.setState({	
      isScientific: !this.state.isScientific	
    });
  }

  render() {
    return (
      <div className={'calculator-app' + (this.state.isScientific ? ' scientific' : '')}>
        <ButtonScientific clickHandler={this.isScientificVisible} />
        <UndoRedo />
        <DisplayContainer />
        <div className="grid-container">
          {this.state.isScientific ? <MemoryControlsContainer /> : null}
          <MainControlsContainer />
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
