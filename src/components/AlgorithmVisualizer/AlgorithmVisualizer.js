import React, { useState, useEffect } from 'react';
import './AlgorithmVisualizer.css';

const AlgorithmVisualizer = ({ steps = [] }) => { 
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCurrentStep(0);
  }, [steps]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(step => step < steps.length ? step + 1 : step);
    }, 500);

    return () => clearInterval(timer);
  }, [steps]);

  if (!Array.isArray(steps)) { 
    return <div>Error: steps is not an array</div>; 
  }

  // if there are no steps or the current step is not yet set, display nothing
  if (steps.length === 0 || currentStep === 0) {
    return null;
  }

  // get the current step
  const step = steps[currentStep - 1];

  return (
    <div className="algorithm-visualizer">
      <div className="algorithm-step">
        <ul>
          {step.array.map((number, index) => {
            let color = 'blue';
            if (step.compared.includes(index)) {
              color = step.array[step.compared[0]] > step.array[step.compared[1]] ? 'red' : 'green';
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
