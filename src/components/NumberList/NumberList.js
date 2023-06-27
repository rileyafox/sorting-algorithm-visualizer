// NumberList.js
import React, { useState } from 'react';
import './NumberList.css';

const NumberList = ({ onListChange, onStart }) => {
  const [input, setInput] = useState("");
  const [listSize, setListSize] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddNumber = () => {
    onListChange((prevList) => [...prevList, Number(input)]);
    setInput("");
  };

  const handleGenerateRandomList = () => {
    const randomList = Array.from({ length: listSize }, () => Math.floor(Math.random() * 100));
    onListChange(randomList);
  };

  const startSorting = () => {
    onStart();
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <input className="number-input" type="number" value={input} onChange={handleInputChange} />
        <button className="button" onClick={handleAddNumber}>Add number</button>
      </div>
      <div className="input-container">
        <input className="random-list-size" type="number" value={listSize} onChange={(e) => setListSize(Number(e.target.value))} />
        <button className="button" onClick={handleGenerateRandomList}>Generate Random List</button>
      </div>
      <button className="button" onClick={startSorting}>Start</button>
    </div>
  );
};

export default NumberList;
