import React, { Component } from 'react';
import'./CalculatorApp.css';

import Display from './components/display/Display';
import MainControls from './components/main-controls/MainControls';
import MemoryControls from './components/memory-controls/MemoryControls';
import { writeNumber, writeDot, writeOperationType, writeResult, clearAll } from './logic/WriteToDisplay';
import { handleKeyEvent } from './logic/HandleKeyEvent';
import { modifyInput } from './logic/Modifyers';

class CalculatorApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayValue: 0,
      writeNewNumber: false,
      numberMemory: ['0'],
      operatorMemory: []
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

  handleNumberInput = (buttonName) => {
    this.setState(
      writeNumber(this.state.displayValue, this.state.writeNewNumber, this.state.numberMemory, buttonName)
    );
  }
  handleDotInput = () => {
    this.setState(
      writeDot(this.state.numberMemory)
    );
  }
  handleOperationInput = (buttonName) => {
    this.setState(
      writeOperationType(this.state.writeNewNumber, this.state.operatorMemory, buttonName)
    )
  }
  handleModifyInput = (buttonName) => {
    this.setState(
      modifyInput(this.state.displayValue, this.state.numberMemory, buttonName)
    )
  }
  handleAllClear = () => {
    this.setState(
      clearAll()
    )
  }
  handleResultOutput = () => {
    this.setState(
      writeResult(this.state.displayValue, this.state.writeNewNumber, this.state.numberMemory, this.state.operatorMemory)
    )
  }
  
  render() {
    return (
      <div className="calculator-app">
        <Display value={this.state.displayValue} />
        <div className="grid-container">
          <MemoryControls
            handleModifyInput={this.handleModifyInput} />
          <MainControls
            handleNumberInput={this.handleNumberInput}
            handleDotInput={this.handleDotInput}
            handleOperationInput={this.handleOperationInput}
            handleModifyInput={this.handleModifyInput}
            handleAllClear={this.handleAllClear}
            handleResultOutput={this.handleResultOutput} />
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
