import React, { Component } from 'react';
import './Display.css';

export default class Display extends Component {
  render(){
    return(
      <div className="input-container">
        <input 
        value="0.000"
        type="text" />
      </div>
    )
  }
}