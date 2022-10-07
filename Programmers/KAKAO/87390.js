function solution(n, left, right) {
  let result = [];

  while (left <= right) {
    result.push(Math.max(Math.floor(left / n), left++ % n) + 1);
  }
  return result;
}
