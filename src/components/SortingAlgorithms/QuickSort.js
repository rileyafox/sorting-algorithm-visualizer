export const quickSortSteps = (inputArr) => {
    let arr = [...inputArr];
    let steps = [];
    let len = arr.length;
  
    const quickSort = (start = 0, end = len - 1) => {
      if (start >= end) {
        return;
      }
      
      let index = partition(start, end);
      quickSort(start, index - 1);
      quickSort(index + 1, end);
    };
  
    const partition = (start, end) => {
      let pivotValue = arr[end];
      let pivotIndex = start;
  
      for (let i = start; i < end; i++) {
        steps.push({ array: [...arr], compared: [i, end] }); // Mark the values being compared
  
        if (arr[i] < pivotValue) {
          steps.push({ array: [...arr], compared: [i, pivotIndex] }); // Mark the values being swapped
          [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]; // Swap values
          steps.push({ array: [...arr], compared: [i, pivotIndex] }); // Update with the new array state
  
          pivotIndex++;
        }
      }
  
      steps.push({ array: [...arr], compared: [pivotIndex, end] }); // Mark the final swap for this partition
      [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]; // Swap the pivot value to its final position
      steps.push({ array: [...arr], compared: [pivotIndex, end] }); // Update with the new array state
  
      return pivotIndex;
    };
  
    quickSort();
    return steps;
  };
  