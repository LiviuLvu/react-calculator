import React from 'react';
import './Display.css';
import AutoScalingText from './auto-scaling-text/AutoScalingText'

const Display = ({ displayValue }) => {
  return(
    <div className="input-container">
        <AutoScalingText>{displayValue}</AutoScalingText>
    </div>
  )
}

export default Display;