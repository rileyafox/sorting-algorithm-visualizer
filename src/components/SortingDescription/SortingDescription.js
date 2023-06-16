import React from 'react';
import './SortingDescription.css';

const SortingDescription = ({ currentStep }) => {
  if (!currentStep) {
    return <p>No steps yet.</p>;
  }

  const { array, compared } = currentStep;

  const isSwap = array[compared[0]] > array[compared[1]];
  const description = isSwap
    ? `Comparing ${array[compared[0]]} and ${array[compared[1]]}. Swap occurred.`
    : `Comparing ${array[compared[0]]} and ${array[compared[1]]}. No swap.`;

  return <p>{description}</p>;
};

export default SortingDescription;
