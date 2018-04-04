import React, { Component } from 'react';
import './MemoryControls.css';
import Button from '../button/Button'

export default class MemoryControls extends Component {  
  handleMemClear = () => {
    this.props.handleMemClear();
  }
  handleMemAdd = () => {
    this.props.handleMemAdd();
  }
  handleMemSubtract = () => {
    this.props.handleMemSubtract();
  }
  handleMemRecall = () => {
    this.props.handleMemRecall();
  }

  render(){
    return(
      <div className="grid-memory-control">
          <Button name="MC" clickHandler={this.handleMemClear} secondary />
          <Button name="M+" clickHandler={this.handleMemAdd} secondary />
          <Button name="M-" clickHandler={this.handleMemSubtract} secondary />
          <Button name="MR" clickHandler={this.handleMemRecall} secondary />
      </div>
    )
  }
}