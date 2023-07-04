// Export a function called selectionSortSteps, which performs selection sort on the input array
// and returns an array of each step in the sorting process.
// Selection sort has a time complexity of O(n^2), where n is the number of items being sorted.
// This is because it loops over each element for each element in the array.
const selectionSortSteps = (arr) => {
  // Initialize an empty array to store each step of the sort
  let steps = [];
  // Store the length of the array for convenience
  let len = arr.length;

  // The main loop goes over each element in the array
  for (let i = 0; i < len; i++) {
    // Assume the minimum value is at the current index
    let min = i;

    // A second loop goes over each element after the current one
    for (let j = i + 1; j < len; j++) {
      // Record the current array state and the indices of the elements being compared
      steps.push({ array: [...arr], compared: [min, j] });

      // If the element at the current index of the inner loop is less than the current minimum, update the minimum
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    // If the minimum value is not at the current index, swap the values
    if (min !== i) {
      // Swap the current element with the element at the minimum index
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }

    // Record the array state after the swap (or lack of swap if min is still equal to i)
    steps.push({ array: [...arr], compared: [min, i] });
  }

  // Return the array of steps
  return steps;
};

export default selectionSortSteps;
