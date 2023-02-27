function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    result += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return result;
}
