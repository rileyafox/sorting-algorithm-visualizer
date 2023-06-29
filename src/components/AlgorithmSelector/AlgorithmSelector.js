import React from 'react';
import './AlgorithmSelector.css';

const AlgorithmSelector = ({ onAlgorithmChange }) => {
  const handleChange = (event) => {
    onAlgorithmChange(event.target.value);
  };

  return (
    <div>
      <select className="select-dropdown" onChange={handleChange}>
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Quick Sort">Quick Sort</option>
        <option value="Merge Sort">Merge Sort</option>
        <option value="Selection Sort">Selection Sort</option>
      </select>
    </div>
  );
};

export default AlgorithmSelector;
