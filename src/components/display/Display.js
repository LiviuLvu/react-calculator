import React from 'react';
import './Display.css';
import AutoScalingText from './auto-scaling-text/AutoScalingText'

const Display = ({ displayValue }) => {
  // display value is undefinded. Why?
  return(
    <div className="input-container">
        <AutoScalingText>{displayValue}</AutoScalingText>
    </div>
  )
}

export default Display;