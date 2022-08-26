const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let sorted = arr.sort((a, b) => a - b);

  const len = sorted.length;

  // 음수가 없거나, 하나밖에 없어서 양수 3개를 곱해야하는 경우
  let case1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];

  // 음수가 2개 이상, 음수 * 음수를 통해 최대값을 구할 수 있는 경우
  let case2 = sorted[0] * sorted[1] * sorted[len - 1];

  return Math.max(case1, case2);
};
