const quickSort = function (arr) {
  let left = [];
  let right = [];
  let middle = arr[0];

  if (arr.length < 2) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  let leftResult = quickSort(left);
  let rightResult = quickSort(right);

  return [...leftResult, middle, ...rightResult];
};
