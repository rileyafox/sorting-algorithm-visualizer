// Import React library. This is required for writing any React component
import React from 'react';

// Import CSS module for this component. This contains all styles specific to AlgorithmSelector component
import './AlgorithmSelector.css';

// Define a functional component AlgorithmSelector. 
// This component receives 'onAlgorithmChange' function as a prop from its parent component
const AlgorithmSelector = ({ onAlgorithmChange }) => {
  // Define a function handleChange that will execute whenever the user changes the selected option
  // in the dropdown. The function receives the event object automatically from the browser.
  const handleChange = (event) => {
    // Call the function passed as a prop from the parent component 
    // and pass the new value of the dropdown to it.
    onAlgorithmChange(event.target.value);
  };

  // The component returns a dropdown menu with 4 options representing 4 different sorting algorithms
  return (
    <div>
      {/* Define a <select> dropdown with an event handler for the onChange event.
        Whenever the selected option changes, the handleChange function will be executed. 
        The className 'select-dropdown' is used to apply styles from the imported CSS module. */}
      <select className="select-dropdown" onChange={handleChange}>
        {/* Define options for the dropdown. The value attribute is what gets sent to the onChange handler 
          (and ultimately to the parent component), and the text between the option tags is what gets displayed 
          to the user in the dropdown. */}
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Quick Sort">Quick Sort</option>
        <option value="Merge Sort">Merge Sort</option>
        <option value="Selection Sort">Selection Sort</option>
      </select>
    </div>
  );
};

// Export AlgorithmSelector component. This allows it to be imported and used in other files.
export default AlgorithmSelector;
