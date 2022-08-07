function solution(n) {
  const arr = [0, 1, 2];

  const fibo = (i) => {
    if (arr[i] !== undefined) {
      return arr[i];
    }
    if (arr[i] <= 2) {
      return arr[n];
    }
    arr[i] = fibo[i - 1] + fibo[i - 2];
    return arr[i];
  };
  return fibo(n);
}
