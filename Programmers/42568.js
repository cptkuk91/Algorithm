function solution(progresses, speeds) {
  let result = [];

  let tmp = [];
  let count = 0;
  let tmpCount = 1;

  // progresses가 100이 됐을 때 tmp에 push한다.
  // progresses를 speed[i]만큼 더하고 speed[i]만큼 더한값은 tmpCount가 된다.

  for (let i = 0; i < progresses.length; i++) {
    while (progresses[i] < 100) {
      progresses[i] += speeds[i] * tmpCount;
      count += tmpCount;
      if (progresses[i] >= 100) {
        tmp.push(count);
        count = 0;
      }
    }
  }

  let max = tmp[0];
  let tmpResult = 0;
  tmp.forEach((el) => {
    if (max >= el) {
      tmpResult++;
    } else {
      result.push(tmpResult);
      tmpResult = 1;
      max = el;
    }
  });
  result.push(tmpResult);

  return result;
}
