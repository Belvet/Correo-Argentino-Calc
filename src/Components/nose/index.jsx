import React, { useState } from 'react';

function SumCalculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState('');

  const handleNumber1Change = (e) => {
    // Allow only numeric input by using regular expression
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setNumber1(value);
    }
  };

  const handleNumber2Change = (e) => {
    // Allow only numeric input by using regular expression
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setNumber2(value);
    }
  };

  const calculateSum = () => {
    const num1 = parseInt(number1, 10);
    const num2 = parseInt(number2, 10);

    if (!isNaN(num1) && !isNaN(num2)) {
      const result = num1 + num2;
      setSum(result);
    } else {
      setSum('Invalid input');
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <div>
        <label>Number 1:</label>
        <input
          type="text"
          value={number1}
          onChange={handleNumber1Change}
        />
      </div>
      <div>
        <label>Number 2:</label>
        <input
          type="text"
          value={number2}
          onChange={handleNumber2Change}
        />
      </div>
      <button onClick={calculateSum}>Calculate Sum</button>
      <div>
        <label>Sum:</label>
        <span>{sum}</span>
      </div>
    </div>
  );
}

export default SumCalculator;