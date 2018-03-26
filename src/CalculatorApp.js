import React, { Component } from 'react';
import logo from './images/logo.svg';
import'./CalculatorApp.css';

import Display from './components/display/Display';
import MainControls from './components/main-controls/MainControls';

class CalculatorApp extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Building a calculator app with react</h2>
        <Display />
        <MainControls />
      </div>
    );
  }
}

export default CalculatorApp;
