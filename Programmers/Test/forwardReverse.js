function solution(N, sequence) {
  let result = 0;

  // Math.min을 통해 주어진 숫자중 가장 작은 값을 반환한다.
  const minDistance = (a, b, N) => {
    if (a > b) {
      // 정방향
      return Math.min(a - b, N - a + b - 1 + 1);
    } else {
      // 역방향
      return Math.min(b - a, N - b + a - 1 + 1);
    }
  };
  if (sequence[0] !== 1) {
    result += minDistance(sequence[i], sequence[i + 1], N);
  }
  for (let i = 0; i < sequence.length - 1; i++) {
    result += minDistance(sequence[i], sequence[i + 1], N);
  }
  return result;
}
