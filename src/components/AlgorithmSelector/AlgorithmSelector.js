import React from 'react';

const AlgorithmSelector = ({ onAlgorithmChange }) => {
  const handleChange = (event) => {
    onAlgorithmChange(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Quick Sort">Quick Sort</option> {/* New Line Added */}
      </select>
    </div>
  );
};

export default AlgorithmSelector;
