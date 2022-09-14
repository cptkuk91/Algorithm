const LSCS = function (arr) {
  let result = -Infinity;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max + arr[i]);
    result = Math.max(max, result);
  }
  return result;
};
