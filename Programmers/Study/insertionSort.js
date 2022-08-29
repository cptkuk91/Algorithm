const insertionSort = function (arr) {
  let result = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= result[i - 1]) {
      result.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (arr[i] <= result[j]) {
          let left = result.slice(0, j);
          let right = result.slice(j);
          result = left.concat(arr[i], right);
          break;
        }
      }
    }
  }
  return result;
};
