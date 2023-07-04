// Import required modules from React. We need useState and useEffect hooks for managing state and side effects
import React, { useState, useEffect } from 'react';
// Import CSS module for this component
import './AlgorithmVisualizer.css';

// Define a functional component AlgorithmVisualizer
// This component receives props from its parent component. If no props are received, default values are provided
const AlgorithmVisualizer = ({ steps = [], numbers = [], onStepChange }) => { 
  // Define a state variable currentStep with its initial value as 0
  const [currentStep, setCurrentStep] = useState(0);

  // Run this effect every time the 'steps' or 'onStepChange' props change
  useEffect(() => {
    // Set up a timer that runs every 150 milliseconds
    const timer = setInterval(() => {
      // Update currentStep state. 
      // We use a function (prevState => newState) to ensure we always have the latest state
      setCurrentStep(prevStep => {
        // Calculate the new step. It should not exceed the length of steps.
        const newStep = prevStep < steps.length ? prevStep + 1 : prevStep;
        // If there is a new step and onStepChange is defined, call onStepChange with the new step
        if (newStep !== prevStep && onStepChange) {
          onStepChange(newStep);
        }
        return newStep;
      });
    }, 150);

    // Return a cleanup function that clears the timer when the component unmounts or the dependencies change
    return () => clearInterval(timer);
  }, [steps, onStepChange]);

  // Handle the case where steps is not an array. Render an error message.
  if (!Array.isArray(steps)) { 
    return <div>Error: steps is not an array</div>; 
  }

  // Define the initial array to display and the indices that are currently being compared
  let arrayToDisplay = numbers;
  let comparedIndices = [];

  // If there is a current step, update arrayToDisplay and comparedIndices based on the current step
  if (currentStep > 0 && currentStep <= steps.length) {
    const step = steps[currentStep - 1];
    arrayToDisplay = step.array;
    comparedIndices = step.compared;
  }

  // Render the array as a list of numbers. Each number is represented by a list item with a height equal to the number.
  // The currently compared numbers are colored differently based on their relative values.
  return (
    <div className="algorithm-visualizer">
      <div className="algorithm-step">
        <ul>
          {arrayToDisplay.map((number, index) => {
            // Assign a default color to the list item
            let color = 'blue';
            // If the current index is in the compared indices, change its color based on comparison
            if (comparedIndices.includes(index)) {
              color = arrayToDisplay[comparedIndices[0]] > arrayToDisplay[comparedIndices[1]] ? 'red' : 'green';
            }
            // Render the list item
            return (
              <li key={index} style={{ backgroundColor: color, color: 'white', height: `${number}px` }}>
                {number}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// Export AlgorithmVisualizer component so it can be used in other files
export default AlgorithmVisualizer;
