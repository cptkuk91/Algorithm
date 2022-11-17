function solution(numbers, k) {
  let result = 0;

  let next = (result) => (result + 2) % numbers.length;

  for (let i = 0; i < k - 1; i++) {
    result = next(result);
  }

  return numbers[result];
}

// 2칸 씩 이동하는 문제
