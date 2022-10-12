function solution(n, t) {
  for (let i = 1; i <= t; i++) {
    n = ((n * i) / i) * 2;
  }

  return n;
}
