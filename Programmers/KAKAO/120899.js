function solution(array) {
  let result = [];

  let max = Math.max(...array);
  console.log(max);
  result.push(max, array.indexOf(max));

  return result;
}
