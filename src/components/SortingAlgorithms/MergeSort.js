const merge = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return arr.concat(left.slice().concat(right.slice()));
  }
  
  const mergeSortSteps = (arr) => {
    let steps = [];
  
    const mergeSort = (arr) => {
      if (arr.length < 2) {
        return arr;
      }
  
      let mid = Math.floor(arr.length / 2),
          left = arr.slice(0, mid),
          right = arr.slice(mid);
      let sortedLeft = mergeSort(left);
      let sortedRight = mergeSort(right);
  
      let merged = merge(sortedLeft, sortedRight);
      steps.push({array: merged, compared: []});
      return merged;
    }
  
    mergeSort(arr);
  
    return steps;
  }
  
  export default mergeSortSteps;
  