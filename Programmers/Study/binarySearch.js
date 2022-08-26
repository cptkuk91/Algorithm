const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = parseInt((left + right) / 2);

    if (target === arr[middle]) {
      return middle;
    }

    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};
