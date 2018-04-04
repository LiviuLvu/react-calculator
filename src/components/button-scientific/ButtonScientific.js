import React, { Component } from 'react';

export default class ButtonScientific extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }
  
  render(){

    return(
      <button
        type="button"
        onClick={this.handleClick} >
        {'<'}
      </button>
    )
  }
}