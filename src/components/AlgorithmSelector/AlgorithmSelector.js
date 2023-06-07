import React from 'react';

const AlgorithmSelector = ({ onAlgorithmChange }) => {
  const handleChange = (event) => {
    onAlgorithmChange(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="Bubble Sort">Bubble Sort</option>
        {/* Add more options as you implement more algorithms */}
      </select>
    </div>
  );
};

export default AlgorithmSelector;
