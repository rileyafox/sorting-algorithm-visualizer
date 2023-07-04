// Import necessary components and hooks from 'react'
import React, { useState } from 'react';
// Import css module for this component
import './NumberList.css';

// Define a functional component, NumberList, which receives onListChange and onStart props from the parent component
const NumberList = ({ onListChange, onStart }) => {
  // Initialize states for input field and listSize with default values
  const [input, setInput] = useState("");
  const [listSize, setListSize] = useState(0);

  // Function to handle changes to the input field, updates the input state
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to handle the adding of number to the list
  // Calls the onListChange function prop with the new list (old list + new number)
  // Clears the input field by setting input state back to ""
  const handleAddNumber = () => {
    onListChange((prevList) => [...prevList, Number(input)]);
    setInput("");
  };

  // Function to handle the generation of a list of random numbers of a size given by listSize state
  // Calls the onListChange function prop with the new randomly generated list
  const handleGenerateRandomList = () => {
    const randomList = Array.from({ length: listSize }, () => Math.floor(Math.random() * 100));
    onListChange(randomList);
  };

  // Function to handle the start of sorting, calls the onStart function prop
  const startSorting = () => {
    onStart();
  };

  // Returns the JSX to render for this component
  return (
    <div className="app-container">
      <div className="input-container">
        <input className="number-input" type="number" value={input} onChange={handleInputChange} />
        <button className="button" onClick={handleAddNumber}>Add number</button>
      </div>
      <div className="input-container">
        <input className="random-list-size" type="number" placeholder="Enter list size" value={listSize} onChange={(e) => setListSize(Number(e.target.value))} />
        <button className="button" onClick={handleGenerateRandomList}>Generate Random List</button>
      </div>
      <button className="button" onClick={startSorting}>Start</button>
    </div>
  );
};

// Export the NumberList component as the default export
export default NumberList;
