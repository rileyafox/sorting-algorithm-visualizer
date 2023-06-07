import React, { useState, useEffect } from 'react';
import './App.css';
import NumberList from './components/NumberList/NumberList';
import AlgorithmSelector from './components/AlgorithmSelector/AlgorithmSelector';
import AlgorithmVisualizer from './components/AlgorithmVisualizer/AlgorithmVisualizer';
import { bubbleSortSteps } from './components/SortingAlgorithms/BubbleSort';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [steps, setSteps] = useState([]);
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  
  useEffect(() => {
    switch(algorithm) {
      case 'Bubble Sort':
        setSteps(bubbleSortSteps(numbers));
        break;
      // add more cases when you add more sorting algorithms
      default:
        break;
    }
  }, [algorithm, numbers]);
  console.log(steps); // add this line
  return (
    <div className="App">
      <NumberList onListChange={setNumbers} />
      <AlgorithmSelector onAlgorithmChange={setAlgorithm} />
      <AlgorithmVisualizer steps={steps} />
    </div>
  );
}

export default App;
