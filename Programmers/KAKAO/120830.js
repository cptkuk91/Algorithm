function solution(n, k) {
  if (n >= 10) {
    k -= Math.floor(n / 10);
  }
  return n * 12000 + k * 2000;
}
