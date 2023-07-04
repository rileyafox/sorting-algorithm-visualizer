// Import React and the necessary hooks
import React, { useState, useEffect } from 'react';
// Import the application's CSS
import './App.css';
// Import the necessary components
import NumberList from './components/NumberList/NumberList';
import AlgorithmSelector from './components/AlgorithmSelector/AlgorithmSelector';
import AlgorithmVisualizer from './components/AlgorithmVisualizer/AlgorithmVisualizer';
// Import the sorting algorithms
import { bubbleSortSteps } from './components/SortingAlgorithms/BubbleSort';
import { quickSortSteps } from './components/SortingAlgorithms/QuickSort';
import mergeSortSteps from './components/SortingAlgorithms/MergeSort';
import selectionSortSteps from './components/SortingAlgorithms/SelectionSort';

// The main App component
const App = () => {
  // State for the numbers to sort
  const [numbers, setNumbers] = useState([]);
  // State for the steps of the sorting process
  const [steps, setSteps] = useState([]);
  // State for the selected algorithm
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  // State for the current step in the sorting process
  const [currentStep, setCurrentStep] = useState(null);
  // State for whether to start sorting or not
  const [start, setStart] = useState(false);
  // State for the sorting times of all algorithms
  const [sortTimes, setSortTimes] = useState({});

  // useEffect hook to perform the sorting and timing when start state or the numbers state changes
  useEffect(() => {
    if (!start || numbers.length === 0) {
      return;
    }

    // Define the algorithms
    const algorithms = {
      'Bubble Sort': bubbleSortSteps,
      'Quick Sort': quickSortSteps,
      'Merge Sort': mergeSortSteps,
      'Selection Sort': selectionSortSteps,
    };

    let newSortTimes = {};

    // For each algorithm, perform the sorting and time it
    for (const algorithmName in algorithms) {
      let arrCopy = [...numbers]; // Create a copy of the array
      const startTime = performance.now(); // Start time
      algorithms[algorithmName](arrCopy); // Perform the sorting
      const endTime = performance.now(); // End time

      const timeTaken = endTime - startTime; // Calculate time taken
      newSortTimes[algorithmName] = timeTaken.toFixed(2); // Store time taken
    }

    // Update the sortTimes state and perform the selected sort for visualization
    setSortTimes(newSortTimes);
    setSteps(algorithms[algorithm](numbers));
  }, [algorithm, numbers, start]); // Only run this effect when algorithm, numbers, or start changes

  // Function to start sorting
  const startSorting = () => {
    setStart(true);
  }

  // Render the components
  return (
    <div className="app-container">
      <AlgorithmVisualizer steps={steps} numbers={numbers} onStepChange={setCurrentStep} />
      <NumberList onListChange={setNumbers} onStart={startSorting} /> {/* onStart prop */}
      <AlgorithmSelector onAlgorithmChange={setAlgorithm} />
      <div className="sort-times">
        {Object.entries(sortTimes).map(([algorithm, time]) => (
          <span key={algorithm}>
            {algorithm} Sort Time: {time} milliseconds
          </span>
        ))}
      </div>
    </div>
  );
}

// Export the App component
export default App;
