function solution(sequence, k) {
  let startIndex = 0;
  let endIndex = 0;
  let sum = sequence[0];
  let result = null;

  while (startIndex <= endIndex && endIndex < sequence.length) {
    if (sum === k) {
      if (result === null || endIndex - startIndex < result[1] - result[0]) {
        result = [startIndex, endIndex];
      }
      sum -= sequence[startIndex];
      startIndex++;
    } else if (sum < k) {
      endIndex++;
      sum += sequence[endIndex];
    } else {
      sum -= sequence[startIndex];
      startIndex++;
    }
  }

  return result;
}
