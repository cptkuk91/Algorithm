/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 4) return n;

  fib = [1, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    // fibo[2] = fibo[1] + fibo[0] => [1, 1, 2]
    // fibo[3] = fibo[2] + fibo[1] => [1, 1, 2, 3]
    // fibo[4] = fibo[3] + fibo[2] => [1, 1, 2, 3, 5]
  }
  return fib[n];
};
