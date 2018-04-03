import React, { Component } from 'react';
import'./CalculatorApp.css';

import Display from './components/display/Display';
import MainControls from './components/main-controls/MainControls';
import { writeNumber, writeDot, writeOperationType, writeResult, clearAll } from './logic/WriteToDisplay';
import { handleKeyEvent } from './logic/HandleKeyEvent';
import { modifyInput } from './logic/Modifyers';

class CalculatorApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayValue: 0,
      newMemoryNumber: false,
      numberMemory: ['0'],
      operators: ['']
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
      writeNumber(this.state.displayValue, this.state.newMemoryNumber, this.state.numberMemory, buttonName)
    );
  }
  handleDotInput = () => {
    this.setState(
      writeDot(this.state.numberMemory)
    );
  }
  handleOperationInput = (buttonName) => {
    this.setState(
      writeOperationType(this.state, buttonName)
    )
  }
  handleModifyInput = (buttonName) => {
    this.setState(
      modifyInput(this.state, buttonName)
    )
  }
  handleAllClear = () => {
    this.setState(
      clearAll()
    )
  }
  handleResultOutput = () => {
    this.setState(
      writeResult(this.state)
    )
  }
  
  render() {
    return (
      <div className="calculator-app">
        <Display value={this.state.displayValue} />
        <MainControls
          handleNumberInput={this.handleNumberInput}
          handleDotInput={this.handleDotInput}
          handleOperationInput={this.handleOperationInput}
          handleModifyInput={this.handleModifyInput}
          handleAllClear={this.handleAllClear}
          handleResultOutput={this.handleResultOutput} />
      </div>
    );
  }
}

export default CalculatorApp;
