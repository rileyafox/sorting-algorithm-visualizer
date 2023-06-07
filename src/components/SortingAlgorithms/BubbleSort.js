export const bubbleSortSteps = (inputArr) => {
    let arr = [...inputArr];
    let steps = [];
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            // We push a new step before any swaps have occurred
            steps.push({ array: [...arr], compared: [j, j + 1] });

            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // We push a new step after the swap
                steps.push({ array: [...arr], compared: [j, j + 1] });
            }
        }
    }

    return steps;
}
