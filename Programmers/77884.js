function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      result -= i;
    } else {
      result += i;
    }
  }
  return result;
}
