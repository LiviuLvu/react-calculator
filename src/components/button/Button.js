import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }
  
  render(){
    let mainOperation = this.props.mainOperation ? "mainOperation" : "";
    let secondary = this.props.secondary ? "secondary" : "";
    let wide =  this.props.wide ? "wide" : "";
    let content = this.props.name === '±' ? <span><sup>+</sup>⁄<sub>-</sub></span> : this.props.name;
    
    return(
      <div className={`grid-item ${mainOperation} ${secondary} ${wide}`}>
        <button 
          type="button"
          onClick={this.handleClick} >
          {content}
        </button>
      </div>
    )
  }
}