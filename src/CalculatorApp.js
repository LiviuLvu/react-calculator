import React, { Component } from 'react';
import'./CalculatorApp.css';

import Display from './components/display/Display';
import MainControls from './components/main-controls/MainControls';
import { writeNumber, writeOperator, writeResult } from './logic/Utils';

class CalculatorApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayValue: 0,
    }
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
      writeOperator(this.state, buttonName)
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
          handleResultOutput={this.handleResultOutput} />
      </div>
    );
  }
}

export default CalculatorApp;
