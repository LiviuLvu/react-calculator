import React, { Component } from 'react';
import'./CalculatorApp.css';

import Display from './components/display/Display';
import MainControls from './components/main-controls/MainControls';
import { calculate } from './logic/Utils';

class CalculatorApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayValue: '0'
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', (event)=>this.inputCommand(event.key));
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', (event)=>this.inputCommand(event.key))
  }

  inputCommand = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }
  
  render() {
    return (
      <div className="calculator-app">
        <Display value={this.state.displayValue} />
        <MainControls clickHandler={this.inputCommand} />
      </div>
    );
  }
}

export default CalculatorApp;
