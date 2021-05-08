import React from 'react';

import './Counter.css'

function Counter() {
  const [counterValue, setCounterValue] = React.useState(0);
  const [inputValue, setInputValue] = React.useState(1)

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue); 
  }

  const subtractFromCounter = () => {
    setCounterValue(counterValue - inputValue); 
  }

  return (
    <div>
      <h3 data-testid='header'>My Counter</h3>
      <h2 
        data-testid='counter'
        className={`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}`}
      >
        {counterValue}
      </h2>
      <button 
        type='button' 
        data-testid='subtract-btn'
        onClick={subtractFromCounter}
      >
        -
      </button>
      <input 
        type="number" 
        data-testid='input' 
        value={inputValue}
        onChange={({ target }) => setInputValue(parseInt(target.value))}
        className='text-center'  
      />
      <button 
        type='button' 
        data-testid='add-btn'
        onClick={addToCounter}  
      >
        +
      </button>
    </div>
  );
}

export default Counter;
 