import React, { Component } from 'react';
import'./CalculatorApp.css';

import Display from './components/display/Display';
import MainControls from './components/main-controls/MainControls';

class CalculatorApp extends Component {
  render() {
    return (
      <div className="calculator-app">
        <Display />
        <MainControls />
      </div>
    );
  }
}

export default CalculatorApp;
