import React, { Component } from 'react';
import'./CalculatorApp.css';

import DisplayContainer from './containers/DisplayContainer';
import MainControlsContainer from './containers/MainControlsContainer';
import MemoryControls from './components/memory-controls/MemoryControls';
import ButtonScientific from './components/button-scientific/ButtonScientific'
import { handleKeyEvent } from './logic/HandleKeyEvent';
import { memoryClear, memoryAdd, memorySubtract, memoryRecall } from './logic/Memory'

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

  // scientific operations 
  isScientificVisible = () => {
    this.setState({
      isScientific: !this.state.isScientific
    });
  }
  handleMemClear = () => {
    this.setState(
      memoryClear(this.state.memory)
    )
  }
  handleMemAdd = () => {
    this.setState(
      memoryAdd(this.state.numberArray, this.state.memory)
    )
  }
  handleMemSubtract = () => {
    this.setState(
      memorySubtract(this.state.numberArray, this.state.memory)
    )
  }
  handleMemRecall = () => {
    this.setState(
      memoryRecall(this.state.displayValue, this.state.writeNewNumber, this.state.numberArray, this.state.memory)
    )
  }


  render() {
    return (
      <div className="calculator-app">
        <ButtonScientific clickHandler={this.isScientificVisible} />
        <DisplayContainer />
        <div className="grid-container">
          {this.state.isScientific ? 
            <MemoryControls
              handleMemClear={this.handleMemClear}
              handleMemAdd={this.handleMemAdd}
              handleMemSubtract={this.handleMemSubtract}
              handleMemRecall={this.handleMemRecall} /> : null}
          <MainControlsContainer />
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
