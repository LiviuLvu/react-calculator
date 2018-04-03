import React, { Component } from 'react';
import './MemoryControls.css';
import Button from '../button/Button'

export default class MemoryControls extends Component {  
  handleModifyInput = (buttonName) => {
    this.props.handleModifyInput(buttonName);
  }

  render(){
    return(
      <div className="grid-memory-control">
          <Button name="MC" clickHandler={this.handleAllClear} secondary />
          <Button name="M+" clickHandler={this.handleModifyInput} secondary />
          <Button name="M-" clickHandler={this.handleModifyInput} secondary />
          <Button name="MR" clickHandler={this.handleOperationInput} secondary />
      </div>
    )
  }
}