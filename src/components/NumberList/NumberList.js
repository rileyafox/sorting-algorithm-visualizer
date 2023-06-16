import React, { useState } from 'react';
import './NumberList.css';

const NumberList = ({ onListChange, onStart }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddNumber = () => {
    onListChange((prevList) => [...prevList, Number(input)]);
    setInput("");
  };

  const startSorting = () => {
    onStart();
  };

  return (
    <div className="number-input-container">
      <input className="number-input" type="number" value={input} onChange={handleInputChange} />
      <button onClick={handleAddNumber}>Add number</button>
      <button onClick={startSorting}>Start</button>
    </div>
  );
};

export default NumberList;
