import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  btnDynamicText = () => {
    // convert js operators to html entities
    const name = this.props.name;
    if (this.props.name === '±') return <span><sup>+</sup>⁄<sub>-</sub></span>;
    else if (this.props.name === '/') return('÷');
    else if (this.props.name === 'x') return('×') ;
    else if (this.props.name === '-') return('−') ;
    else if (this.props.name === '+') return('+') ;
    return name;
  }
  
  render(){
    let mainOperation = this.props.mainOperation ? "mainOperation" : "";
    let secondary = this.props.secondary ? "secondary" : "";
    let wide =  this.props.wide ? "wide" : "";
    let btnDynamicText = this.btnDynamicText();

    return(
      <div className={`grid-item ${mainOperation} ${secondary} ${wide}`}>
        <button 
          type="button"
          onClick={this.handleClick} >
          {btnDynamicText}
        </button>
      </div>
    )
  }
}