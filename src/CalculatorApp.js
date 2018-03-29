import React, { Component } from 'react';
import'./CalculatorApp.css';

import Display from './components/display/Display';
import MainControls from './components/main-controls/MainControls';
import { writeNumber, writeOperationType, writeResult, clearAll } from './logic/WriteToDisplay';
import { handleKeyEvent } from './logic/HandleKeyEvent';

class CalculatorApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayValue: 0,
      waitingForOperator: false,
      wasExpressionEvaluated: false
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      this.setState(
        handleKeyEvent(this.state, event.key)
      );
    });
  }
  
  componentWillUnmount() {
  }

  handleNumberInput = (buttonName) => {
    // add numbers to displayValue
    this.setState(
      writeNumber(this.state, buttonName)
    );
  }
  handleOperationInput = (buttonName) => {
    // add operators to displayValue
    this.setState(
      writeOperationType(this.state, buttonName)
    )
  }
  handleAllClear = () => {
    // clean memory and display
    this.setState(
      clearAll()
    )
  }
  handleResultOutput = () => {
    // evaluate displayValue
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
          handleOperationInput={this.handleOperationInput}
          handleAllClear={this.handleAllClear}
          handleResultOutput={this.handleResultOutput} />
      </div>
    );
  }
}

export default CalculatorApp;
