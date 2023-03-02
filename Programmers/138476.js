function solution(k, tangerine) {
  let result = 0;

  let tmp = {};

  for (let num of tangerine) {
    if (num in tmp) {
      tmp[num] += 1;
    } else {
      tmp[num] = 1;
    }
  }

  let tmpSort = Object.values(tmp).sort((a, b) => b - a);
  console.log(tmpSort);

  let count = 0;
  for (let i = 0; i < tmpSort.length; i++) {
    if (count < k) {
      count += tmpSort[i];
      result++;
    }
    if (count === k) {
      break;
    }
  }

  return result;
}
