function solution(n) {
  // Math.sqrt(n)은 제곱근을 구하는 공식이다.
  let result = Math.sqrt(n);
  if (result % 1 === 0) {
    return (result + 1) * (result + 1);
  } else {
    return -1;
  }
}
