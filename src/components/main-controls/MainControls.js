import React from 'react';
import './MainControls.css';
import Button from '../button/Button'

const MainControls = ({ numberInput }) => {
  const handleNumberInput = (number) => {
    numberInput(number);
  }
  const handleDotInput = (number) => {
  
  }
  const handleOperationInput = (buttonName) => {
  
  }
  const handleModifyInput = (buttonName) => {
  
  }
  const handleResultOutput = (buttonName) => {
  
  }
  const handleAllClear = (buttonName) => {
  
  }

    return(
      <div className="grid-main-control">
          <Button name="AC" clickHandler={handleAllClear} secondary />
          <Button name="±" clickHandler={handleModifyInput} secondary />
          <Button name="%" clickHandler={handleModifyInput} secondary />
          <Button name="/" clickHandler={handleOperationInput} mainOperation />
          <Button name="7" clickHandler={handleNumberInput} />
          <Button name="8" clickHandler={handleNumberInput} />
          <Button name="9" clickHandler={handleNumberInput} />
          <Button name="*" clickHandler={handleOperationInput} mainOperation />
          <Button name="4" clickHandler={handleNumberInput} />
          <Button name="5" clickHandler={handleNumberInput} />
          <Button name="6" clickHandler={handleNumberInput} />
          <Button name="-" clickHandler={handleOperationInput} mainOperation />
          <Button name="1" clickHandler={handleNumberInput} />
          <Button name="2" clickHandler={handleNumberInput} />
          <Button name="3" clickHandler={handleNumberInput} />
          <Button name="+" clickHandler={handleOperationInput} mainOperation />
          <Button name="0" clickHandler={handleNumberInput} wide />
          <Button name="," clickHandler={handleDotInput} />
          <Button name="=" clickHandler={handleResultOutput} mainOperation />
      </div>
    )
}
export default MainControls;