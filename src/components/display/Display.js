import React, { Component } from 'react';
import './Display.css';
import AutoScalingText from './auto-scaling-text/AutoScalingText'

export default class Display extends Component {
  render(){
    return(
      <div className="input-container">
          <AutoScalingText>{this.props.value}</AutoScalingText>
      </div>
    )
  }
}