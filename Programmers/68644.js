function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let total = numbers[i] + numbers[j];
      if (result.indexOf(total) === -1) {
        result.push(total);
      }
    }
  }
  result.sort((a, b) => a - b);
  return result;
}
