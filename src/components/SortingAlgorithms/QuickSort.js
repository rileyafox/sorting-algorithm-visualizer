// Export a function called quickSortSteps, which performs quicksort on the input array
// and returns an array of each step in the sorting process.
// Quicksort has an average and best-case time complexity of O(n log(n)), where n is the number of items being sorted.
// However, in the worst-case scenario (i.e., when the input array is already sorted), quicksort has a time complexity of O(n^2).
export const quickSortSteps = (inputArr) => {
  // Create a copy of the input array to avoid mutating the original array
  let arr = [...inputArr];
  // Initialize an empty array to store each step of the sort
  let steps = [];
  // Store the length of the array for convenience
  let len = arr.length;

  // The main function of quicksort, which partitions the array and recursively sorts each partition
  const quickSort = (start = 0, end = len - 1) => {
    // Base case: if the start index is not less than the end index, the subarray has 0 or 1 elements and is already sorted
    if (start >= end) {
      return;
    }
    
    // Partition the array and get the index of the pivot after partition
    let index = partition(start, end);
    // Recursively sort the left and right partitions
    quickSort(start, index - 1);
    quickSort(index + 1, end);
  };

  // The partition function, which partitions the array around a pivot and returns the index of the pivot after partition
  const partition = (start, end) => {
    // Choose the last element as the pivot value
    let pivotValue = arr[end];
    // Initialize the pivot index as the start index
    let pivotIndex = start;

    // Loop through the array from the start index to one before the end index
    for (let i = start; i < end; i++) {
      // Record the current array state and the indices of the elements being compared
      steps.push({ array: [...arr], compared: [i, end] });

      // If the current element is less than the pivot value, swap it with the element at the pivot index and increase the pivot index
      if (arr[i] < pivotValue) {
        // Record the current array state and the indices of the elements being swapped
        steps.push({ array: [...arr], compared: [i, pivotIndex] });
        // Swap the current element with the element at the pivot index
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Record the array state after the swap
        steps.push({ array: [...arr], compared: [i, pivotIndex] });

        // Increase the pivot index
        pivotIndex++;
      }
    }

    // Swap the pivot value into its final position
    steps.push({ array: [...arr], compared: [pivotIndex, end] });
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    steps.push({ array: [...arr], compared: [pivotIndex, end] });

    // Return the index of the pivot value after the partition
    return pivotIndex;
  };

  // Start the quicksort process
  quickSort();
  // Return the array of steps
  return steps;
};
