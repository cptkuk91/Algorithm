function solution(arr) {
  let result = true;

  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= sum) {
      return false;
    } else {
      sum += arr[i];
    }
  }
  return result;
}
