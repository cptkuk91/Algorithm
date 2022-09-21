function solution(brown, yellow) {
  let result = [];
  sum = brown + yellow;

  for (let height = 3; height < brown; height++) {
    if (sum % height === 0) {
      let weight = sum / height;
      if ((height - 2) * (weight - 2) === yellow) {
        result = [height, weight];
      }
    }
  }
  return result;
}
