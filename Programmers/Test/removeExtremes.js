function solution(arr) {
  let result = [];

  let longestLen = 0;
  let longestIdx = 0;
  let shortestLen = 20; // 주의 사항에 가장 긴 경우는 20이하를 갖는다고 한다. 0을 설정할 경우 공식 성립 x
  let shortestIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longestLen) {
      longestLen = arr[i].length;
      longestIdx = i;
    }

    if (arr[i].length <= shortestLen) {
      shortestLen = arr[i].length;
      shortestIdx = i;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (j !== longestIdx && j !== shortestIdx) {
      result.push(arr[j]);
    }
  }

  return result;
}
