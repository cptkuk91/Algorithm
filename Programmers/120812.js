function solution(array) {
  let result = 0;

  let tmp = {};

  for (const num of array) {
    if (num in tmp) {
      tmp[num] += 1;
    } else {
      // 없는 숫자라면 시작값 1을 설정해준다.
      tmp[num] = 1;
    }
  }
  console.log(tmp);

  let maxCount = 0;
  let maxNum = null;
  let sameCount = false;

  for (const num in tmp) {
    if (tmp[num] > maxCount) {
      maxCount = tmp[num];
      maxNum = num;
      sameCount = false;
    } else if (tmp[num] === maxCount) {
      sameCount = true;
    }
  }

  if (sameCount) {
    return -1;
  } else {
    result = parseInt(maxNum);
  }

  return result;
}
