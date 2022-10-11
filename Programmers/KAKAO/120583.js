function solution(array, n) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      result++;
    }
  }
  return result;
}
