function solution(n) {
  let result = 0;

  let index = 1;

  while (index <= n) {
    if (n % index === 0) {
      result++;
    }
    index++;
  }

  return result;
}
