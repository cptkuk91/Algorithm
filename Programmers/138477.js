function solution(k, score) {
  let result = [];

  let tmpArray = [];
  for (let i = 0; i < score.length; i++) {
    if (tmpArray.length < k) {
      tmpArray.push(score[i]);
      tmpArray.sort((a, b) => a - b);
      result.push(tmpArray[0]);
    } else if (tmpArray.length === k) {
      if (score[i] < tmpArray[0]) {
        result.push(tmpArray[0]);
      } else {
        let shiftTmp = tmpArray.shift();
        tmpArray.push(score[i]);
        tmpArray.sort((a, b) => a - b);
        result.push(tmpArray[0]);
      }
    }
  }

  return result;
}
