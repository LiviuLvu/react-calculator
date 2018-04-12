import React, { Component } from 'react';
import'./CalculatorApp.css';

import DisplayContainer from './containers/DisplayContainer';
import MainControlsContainer from './containers/MainControlsContainer';
import MemoryControls from './components/memory-controls/MemoryControls';
import ButtonScientific from './components/button-scientific/ButtonScientific'
import { handleKeyEvent } from './logic/HandleKeyEvent';

class CalculatorApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayValue: 0,
      writeNewNumber: false,
      numberArray: ['0'],
      operatorArray: [],
      isScientific: false,
      memory: 0
    }
  }
  
  handleKeyEvent = ($event) => {
    this.setState(
      handleKeyEvent(this.state, $event.key)
    );
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyEvent);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyEvent);
  }

  render() {
    return (
      <div className="calculator-app">
        <ButtonScientific clickHandler={this.isScientificVisible} />
        <DisplayContainer />
        <div className="grid-container">
          {this.state.isScientific ? <MemoryControls/> : null}
          <MainControlsContainer />
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
