function solution(N, stages) {
  let result = [];

  let tmpNum = stages.length;
  for (let i = 1; i <= N; i++) {
    let tmp = stages.filter((el) => el === i).length;
    console.log(tmp);
    result.push([i, tmp / tmpNum]);
    tmpNum -= tmp;
  }

  result = result.sort((a, b) => b[1] - a[1]);
  result = result.map((el) => el[0]);

  // 반드시 result에 할당해야합니다.
  // sort한 결과를 담아야 map에서 정렬된 result를 사용할 수 있고,
  // map은 새로운 배열을 반환하기 때문에 반드시 할당해줘야 합니다.

  return result;
}
