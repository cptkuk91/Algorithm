function solution(numbers) {
  let result = 0;

  numbers.sort((a, b) => a - b);
  console.log(numbers);

  let tmp = 0;
  let tmpMax = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  console.log(tmpMax);

  if (numbers[0] < 0 && numbers[1] < 0) {
    tmp = numbers[0] * numbers[1];
    if (tmpMax > tmp) {
      result = tmpMax;
    } else {
      result = tmp;
    }
  } else {
    result = tmpMax;
  }

  return result;
}
