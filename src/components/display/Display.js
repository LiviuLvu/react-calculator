import React from 'react';
import './Display.css';
import AutoScalingText from './auto-scaling-text/AutoScalingText'

const Display = ({ displayValue, displayHistory }) => {
  return(
    <div className="input-container">
        <div className="displayHistory">{displayHistory}</div>
        <AutoScalingText>{displayValue}</AutoScalingText>
    </div>
  )
}

export default Display;