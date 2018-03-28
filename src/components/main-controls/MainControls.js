import React, { Component } from 'react';
import './MainControls.css';
import Button from '../button/Button'

export default class MainControls extends Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  }

  render(){
    return(
      <div className="grid-container">
          <Button name="AC" clickHandler={this.handleClick} secondary />
          <Button name="±" clickHandler={this.handleClick} secondary />
          <Button name="%" clickHandler={this.handleClick} secondary />
          <Button name="÷" clickHandler={this.handleClick} mainOperation />
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="&times;" clickHandler={this.handleClick} mainOperation />
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="&#x2212;" clickHandler={this.handleClick} mainOperation />
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="&#43;" clickHandler={this.handleClick} mainOperation />
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="," clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} mainOperation />
      </div>
    )
  }
}