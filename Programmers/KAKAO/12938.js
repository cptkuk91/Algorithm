function solution(n, s) {
  if (n > s) return [-1];

  const middle = Math.floor(s / n);
  const result = new Array(n).fill(middle);

  for (let i = 0; i < s % n; i++) {
    result[result.length - 1 - i]++;
  }
  return result;
}
