function solution(score) {
  let result = [];

  let tmp = [];

  for (let i = 0; i < score.length; i++) {
    tmp.push((score[i][0] + score[i][1]) / 2);
  }

  let sortedArr = [...tmp].sort((a, b) => b - a);
  for (let i of tmp) {
    // 현재 rank(i)의 경우 다시 0부터 시작한다. 순위는 1부터 시작하기 때문에 +1을 더해준다.

    // indexOf를 사용한 이유는 우선 값을 구한 후 sort된 값을 바탕으로, 비교하면서 위치를 찾는 방법을 통해 문제를 해결했다.
    let rank = sortedArr.indexOf(i) + 1;
    result.push(rank);
  }

  return result;
}

// 우선 score에 들어 있는 평균값을 구해야 한다. 따라서 반복문을 통해 score[i]에 접근하고 첫 값[0]과 [1] 값을 더한 후 나눠 구할 수 있었다.
// 높은 숫자가 1등이기 때문에 sort((a, b) => b - a)를 통해 정렬하였고 주의 사항으로 spread Operator를 사용해야만한다.
// 새로운 배열을 만들 것이기 때문이다. 따라서 [...tmp]를 통해 tmp 배열을 복사 후 sortedArr에 넣어줬다.
// 마지막으로 tmp에 있는 각 값을 sortedArr에서 찾아야 한다. 이때 sortedArr(i)만 적용할 경우 첫 값은 0이 된다.
// 하지만 우리는 0위를 구하는 게 아니라 1위부터 구해야하기 때문에 +1 을 해줬고 result배열에 결과값을 넣은 후 원하는 값을 찾을 수 있다.
