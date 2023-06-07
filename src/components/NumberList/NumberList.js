import React, { useState } from 'react';

const NumberList = ({ onListChange }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddNumber = () => {
    const number = parseInt(input, 10);
    if (!isNaN(number)) {
      onListChange(prevNumbers => [...prevNumbers, number]);
      setInput('');
    }
  };

  return (
    <div>
      <input value={input} onChange={handleInputChange} type="number" />
      <button onClick={handleAddNumber}>Add number</button>
    </div>
  );
};

export default NumberList;
