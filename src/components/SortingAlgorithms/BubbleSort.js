// Export a function called bubbleSortSteps, which performs bubble sort on the input array
// and returns an array of each step in the sorting process.
// Bubble sort has a worst-case and average time complexity of O(n^2), 
// where n is the number of items being sorted. The reason for this is because 
// it has to loop through each item and compare it with every other item in the list.
export const bubbleSortSteps = (inputArr) => {
    // Create a copy of the input array to avoid mutating the original
    let arr = [...inputArr];
    // Initialize an empty array to store each step of the sort
    let steps = [];
    // Get the length of the array
    let len = arr.length;

    // Outer loop, runs 'n' times, hence contributing 'n' to the time complexity of O(n^2)
    for (let i = 0; i < len; i++) {
        // Inner loop, for each element, loop over the array again, but this time stop at len - i - 1
        // This is because after each full pass, the largest element will have bubbled up to the end,
        // so there's no need to check the last i elements. This loop also runs 'n' times, contributing the other 'n' to the O(n^2)
        for (let j = 0; j < len - i - 1; j++) {
            // Before any swaps have occurred, take a snapshot of the array and the indices being compared,
            // and add this snapshot as a step
            steps.push({ array: [...arr], compared: [j, j + 1] });

            // If the current element is greater than the next one
            if (arr[j] > arr[j + 1]) {
                // Swap them (temp is used to temporarily hold arr[j] so it doesn't get lost when we overwrite it)
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // After the swap, take another snapshot of the array and the indices being compared,
                // and add this as a step
                steps.push({ array: [...arr], compared: [j, j + 1] });
            }
        }
    }

    // Return the array of steps, each step being an object containing a snapshot of the array at that point,
    // and the two indices being compared
    return steps;
}
