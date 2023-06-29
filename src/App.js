import React, { useState, useEffect } from 'react';
import './App.css';
import NumberList from './components/NumberList/NumberList';
import AlgorithmSelector from './components/AlgorithmSelector/AlgorithmSelector';
import AlgorithmVisualizer from './components/AlgorithmVisualizer/AlgorithmVisualizer';
import { bubbleSortSteps } from './components/SortingAlgorithms/BubbleSort';
import { quickSortSteps } from './components/SortingAlgorithms/QuickSort';
import mergeSortSteps from './components/SortingAlgorithms/MergeSort';
import selectionSortSteps from './components/SortingAlgorithms/SelectionSort';


const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [steps, setSteps] = useState([]);
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  const [currentStep, setCurrentStep] = useState(null);
  const [start, setStart] = useState(false);
  const [sortTime, setSortTime] = useState(null);

  useEffect(() => {
    if (!start) {
      return;
    }
    const startTime = performance.now();
    switch(algorithm) {
      case 'Bubble Sort':
        setSteps(bubbleSortSteps(numbers));
        break;
      case 'Quick Sort':
        setSteps(quickSortSteps(numbers));
        break;
      case 'Merge Sort':
        setSteps(mergeSortSteps(numbers));
        break;
      case 'Selection Sort':
        setSteps(selectionSortSteps(numbers));
        break;
      default:
        break;
    }
    
    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    setSortTime(timeTaken.toFixed(2));
  }, [algorithm, numbers, start]);

  const startSorting = () => {
    setStart(true);
  }

  return (
    <div className="app-container">
      <AlgorithmVisualizer steps={steps} numbers={numbers} onStepChange={setCurrentStep} />
      <NumberList onListChange={setNumbers} onStart={startSorting} /> {/* onStart prop */}
      <AlgorithmSelector onAlgorithmChange={setAlgorithm} />
      {sortTime && <div className="sort-time">Sort Time: {sortTime} milliseconds</div>}
    </div>
  );
}

export default App;
