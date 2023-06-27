import React, { useState, useEffect } from 'react';
import './App.css';
import NumberList from './components/NumberList/NumberList';
import AlgorithmSelector from './components/AlgorithmSelector/AlgorithmSelector';
import AlgorithmVisualizer from './components/AlgorithmVisualizer/AlgorithmVisualizer';
import { bubbleSortSteps } from './components/SortingAlgorithms/BubbleSort';
import { quickSortSteps } from './components/SortingAlgorithms/QuickSort'; // importing QuickSort

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [steps, setSteps] = useState([]);
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  const [currentStep, setCurrentStep] = useState(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      return;
    }
    switch(algorithm) {
      case 'Bubble Sort':
        setSteps(bubbleSortSteps(numbers));
        break;
      case 'Quick Sort':
        setSteps(quickSortSteps(numbers)); // added QuickSort case
        break;
      // add more cases when you add more sorting algorithms
      default:
        break;
    }
  }, [algorithm, numbers, start]);

  const startSorting = () => {
    setStart(true);
  }

  return (
    <div className="app-container">
      <AlgorithmVisualizer steps={steps} numbers={numbers} onStepChange={setCurrentStep} />
      <NumberList onListChange={setNumbers} onStart={startSorting} /> {/* onStart prop */}
      <AlgorithmSelector onAlgorithmChange={setAlgorithm} />
    </div>
  );
}

export default App;
