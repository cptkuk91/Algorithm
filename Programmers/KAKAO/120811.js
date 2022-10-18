function solution(array) {
  let sorted = array.sort((a, b) => a - b);

  let position = 0;

  for (let i = 1; i <= array.length; i++) {
    position += i;
  }

  let middle = position / array.length - 1;

  return sorted[middle];
}
