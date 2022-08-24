const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let sorted = arr.sort((a, b) => a - b);

  const len = sorted.length;

  // 음수가 없거나, 하나밖에 없어서 양수 3개를 곱해야하는 경우
  let case1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  let case2 = sorted[0] * sorted[1] * sorted[len - 1];

  return Math.max(case1, case2);
};
