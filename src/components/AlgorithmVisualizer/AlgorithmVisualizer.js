import React, { useState, useEffect } from 'react';
import './AlgorithmVisualizer.css';

const AlgorithmVisualizer = ({ steps = [], numbers = [], onStepChange }) => { 
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prevStep => {
        const newStep = prevStep < steps.length ? prevStep + 1 : prevStep;
        if (newStep !== prevStep && onStepChange) {
          onStepChange(newStep);
        }
        return newStep;
      });
    }, 500);

    return () => clearInterval(timer);
  }, [steps, onStepChange]);

  if (!Array.isArray(steps)) { 
    return <div>Error: steps is not an array</div>; 
  }

  let arrayToDisplay = numbers;
  let comparedIndices = [];

  if (currentStep > 0 && currentStep <= steps.length) {
    const step = steps[currentStep - 1];
    arrayToDisplay = step.array;
    comparedIndices = step.compared;
  }

  return (
    <div className="algorithm-visualizer">
      <div className="algorithm-step">
        <ul>
          {arrayToDisplay.map((number, index) => {
            let color = 'blue';
            if (comparedIndices.includes(index)) {
              color = arrayToDisplay[comparedIndices[0]] > arrayToDisplay[comparedIndices[1]] ? 'red' : 'green';
            }
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

export default AlgorithmVisualizer;
