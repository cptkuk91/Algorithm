function solution(N, stages) {
  let result = [];

  let tmpNum = stages.length;
  for (let i = 1; i <= N; i++) {
    let tmp = stages.filter((el) => el === i).length;
    console.log(tmp);
    result.push([i, tmp / tmpNum]);
    tmpNum -= tmp;
  }

  return result;
}
