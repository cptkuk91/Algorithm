const fib = function (n) {
  if (n < 1) return n;

  let fibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    // fibo[2] = fibo[1] + fibo[0] => [0, 1, 1]
    // fibo[3] = fibo[2] + fibo[1] => [0, 1, 1, 2]
  }
  return fibo[n];
};
