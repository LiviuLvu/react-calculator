import React, { Component } from 'react';
import'./CalculatorApp.css';

import Display from './components/display/Display';
import MainControls from './components/main-controls/MainControls';
import MemoryControls from './components/memory-controls/MemoryControls';
import ButtonScientific from './components/button-scientific/ButtonScientific'
import { writeNumber, writeDot, writeOperationType, writeResult, clearAll } from './logic/WriteToDisplay';
import { handleKeyEvent } from './logic/HandleKeyEvent';
import { modifyInput } from './logic/Modifyers';
import { memoryClear, memoryAdd, memorySubtract, memoryRecall } from './logic/Memory'

class CalculatorApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayValue: 0,
      writeNewNumber: false,
      numberArray: ['0'],
      operatorArray: [],
      isScientific: false
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
      writeNumber(this.state.displayValue, this.state.writeNewNumber, this.state.numberArray, buttonName)
    );
  }
  handleDotInput = () => {
    this.setState(
      writeDot(this.state.numberArray)
    );
  }
  handleOperationInput = (buttonName) => {
    this.setState(
      writeOperationType(this.state.writeNewNumber, this.state.operatorArray, buttonName)
    )
  }
  handleModifyInput = (buttonName) => {
    this.setState(
      modifyInput(this.state.displayValue, this.state.numberArray, buttonName)
    )
  }
  handleAllClear = () => {
    this.setState(
      clearAll()
    )
  }
  handleResultOutput = () => {
    this.setState(
      writeResult(this.state.displayValue, this.state.writeNewNumber, this.state.numberArray, this.state.operatorArray)
    )
  }

  isScientificVisible = () => {
    this.setState({
      isScientific: !this.state.isScientific
    });
  }
  handleMemClear = () => {
    this.setState(
      memoryClear()
    )
  }
  handleMemAdd = () => {
    this.setState(
      memoryAdd()
    )
  }
  handleMemSubtract = () => {
    this.setState(
      memorySubtract()
    )
  }
  handleMemRecall = () => {
    this.setState(
      memoryRecall()
    )
  }


  render() {
    return (
      <div className="calculator-app">
        <ButtonScientific clickHandler={this.isScientificVisible} />
        <Display value={this.state.displayValue} />
        <div className="grid-container">
          {this.state.isScientific ? 
            <MemoryControls
              handleMemClear={this.handleMemClear}
              handleMemAdd={this.handleMemAdd}
              handleMemSubtract={this.handleMemSubtract}
              handleMemRecall={this.handleMemRecall} /> : ''}
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
