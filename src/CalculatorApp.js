import React, { Component } from 'react';
import logo from './images/logo.svg';
import './CalculatorApp.css';

class CalculatorApp extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Building a calculator app with react</h2>
      </div>
    );
  }
}

export default CalculatorApp;
