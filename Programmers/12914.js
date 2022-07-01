function solution(n) {
  let arr = [0, 1, 2];
  if (n <= 2) {
    return arr[n];
  }
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n];
}
