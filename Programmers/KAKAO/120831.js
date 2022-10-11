function solution(n) {
  let result = 0;

  for (let i = 0; i <= n; i += 2) {
    result += i;
  }
  return result;
}
