import React from 'react';
import './MemoryControls.css';
import Button from '../button/Button'

const MemoryControls = ({ memClear, memAdd, memSubtract, memRecall }) => {

  const handleMemClear = () => {
    memClear();
  }
  const handleMemAdd = () => {
    memAdd();
  }
  const handleMemSubtract = () => {
    memSubtract();
  }
  const handleMemRecall = () => {
    memRecall();
  }
  
  return(
    <div className="grid-memory-control">
        <Button name="MC" clickHandler={handleMemClear} secondary />
        <Button name="M+" clickHandler={handleMemAdd} secondary />
        <Button name="M-" clickHandler={handleMemSubtract} secondary />
        <Button name="MR" clickHandler={handleMemRecall} secondary />
    </div>
  )
}

export default MemoryControls;