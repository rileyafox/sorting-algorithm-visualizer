// Export a function called mergeSortSteps, which performs merge sort on the input array
// and returns an array of each step in the sorting process.
// Merge sort has a time complexity of O(n log(n)), where n is the number of items being sorted.
// This is because it splits the array in half with each recursive call, 
// creating a binary tree of subarrays (log(n)), and then merges each subarray together (n).
const mergeSortSteps = (arr) => {
  // Initialize an empty array to store each step of the sort
  let steps = [];
  // Create an auxiliary array as a copy of the original array. 
  // This array is used to compare elements during the merge process while keeping the original array intact.
  let auxiliaryArr = arr.slice();

  // The main function of merge sort, which recursively splits the array in half and merges each half.
  const mergeSort = (start, end) => {
    // Base case: if the start index is not less than the end index, the subarray has 0 or 1 elements and is already sorted.
    if (start >= end) {
      return;
    }

    // Calculate the midpoint of the current subarray
    let mid = Math.floor((start + end) / 2);

    // Recursively sort the left and right halves of the subarray
    mergeSort(start, mid);
    mergeSort(mid + 1, end);

    // Merge the sorted halves together
    merge(start, mid, end);
  }

  // The merge function, which merges two sorted subarrays (from start to mid and from mid + 1 to end) into one sorted subarray.
  const merge = (start, mid, end) => {
    let leftIndex = start;
    let rightIndex = mid + 1;
    let currentIndex = start;

    // While there are elements in both subarrays
    while (leftIndex <= mid && rightIndex <= end) {
      // Take a snapshot of the array and the indices being compared, and add this snapshot as a step
      steps.push({
        array: [...auxiliaryArr],
        compared: [leftIndex, rightIndex]
      });

      // If the current element of the left subarray is less than or equal to the current element of the right subarray
      if (auxiliaryArr[leftIndex] <= auxiliaryArr[rightIndex]) {
        // Add the current element of the left subarray to the merged array
        arr[currentIndex++] = auxiliaryArr[leftIndex++];
      } else {
        // Otherwise, add the current element of the right subarray to the merged array
        arr[currentIndex++] = auxiliaryArr[rightIndex++];
      }
    }

    // If there are remaining elements in the left subarray, add them to the merged array
    while (leftIndex <= mid) {
      steps.push({
        array: [...auxiliaryArr],
        compared: [leftIndex]
      });
      arr[currentIndex++] = auxiliaryArr[leftIndex++];
    }

    // If there are remaining elements in the right subarray, add them to the merged array
    while (rightIndex <= end) {
      steps.push({
        array: [...auxiliaryArr],
        compared: [rightIndex]
      });
      arr[currentIndex++] = auxiliaryArr[rightIndex++];
    }

    // Update the auxiliary array to reflect the merged array
    for (let i = start; i <= end; i++) {
      auxiliaryArr[i] = arr[i];
    }
  }

  // Start the merge sort process
  mergeSort(0, arr.length - 1);

  // Return the array of steps
  return steps;
}

export default mergeSortSteps;
