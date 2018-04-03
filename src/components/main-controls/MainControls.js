import React, { Component } from 'react';
import './MainControls.css';
import Button from '../button/Button'

export default class MainControls extends Component {
  handleNumberInput = (number) => {
    this.props.handleNumberInput(number);
  }
  handleDotInput = (number) => {
    this.props.handleDotInput(number);
  }
  handleOperationInput = (buttonName) => {
    this.props.handleOperationInput(buttonName);
  }
  handleModifyInput = (buttonName) => {
    this.props.handleModifyInput(buttonName);
  }
  handleResultOutput = (buttonName) => {
    this.props.handleResultOutput(buttonName);
  }
  handleAllClear = (buttonName) => {
    this.props.handleAllClear(buttonName);
  }

  render(){
    return(
      <div className="grid-main-control">
          <Button name="AC" clickHandler={this.handleAllClear} secondary />
          <Button name="±" clickHandler={this.handleModifyInput} secondary />
          <Button name="%" clickHandler={this.handleModifyInput} secondary />
          <Button name="/" clickHandler={this.handleOperationInput} mainOperation />
          <Button name="7" clickHandler={this.handleNumberInput} />
          <Button name="8" clickHandler={this.handleNumberInput} />
          <Button name="9" clickHandler={this.handleNumberInput} />
          <Button name="*" clickHandler={this.handleOperationInput} mainOperation />
          <Button name="4" clickHandler={this.handleNumberInput} />
          <Button name="5" clickHandler={this.handleNumberInput} />
          <Button name="6" clickHandler={this.handleNumberInput} />
          <Button name="-" clickHandler={this.handleOperationInput} mainOperation />
          <Button name="1" clickHandler={this.handleNumberInput} />
          <Button name="2" clickHandler={this.handleNumberInput} />
          <Button name="3" clickHandler={this.handleNumberInput} />
          <Button name="+" clickHandler={this.handleOperationInput} mainOperation />
          <Button name="0" clickHandler={this.handleNumberInput} wide />
          <Button name="," clickHandler={this.handleDotInput} />
          <Button name="=" clickHandler={this.handleResultOutput} mainOperation />
      </div>
    )
  }
}