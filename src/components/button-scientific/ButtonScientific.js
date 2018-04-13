import React, { Component } from 'react';
import './ButtonScientific.css';

export default class ButtonScientific extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }
  
  render(){

    return(
      <button
        className="toggle-scientific"
        type="button"
        onClick={this.handleClick} >
        {'M'}
      </button>
    )
  }
}