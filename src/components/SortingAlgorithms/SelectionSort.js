const selectionSortSteps = (arr) => {
    let steps = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
        steps.push({ array: [...arr], compared: [min, j] });
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      if (min !== i) {
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }
      steps.push({ array: [...arr], compared: [min, i] });
    }
    return steps;
  };
  
  export default selectionSortSteps;
  