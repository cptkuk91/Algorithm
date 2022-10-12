function solution(numbers) {
  let result = 0;

  numbers.sort((a, b) => b - a);
  console.log(numbers);
  return numbers[0] * numbers[1];
}
