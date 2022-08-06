// subsetOf는 부분집합을 뜻한다.
function solution(base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const checkArr = (find, compare, from) => {
    for (let i = from; i < compare.length; i++) {
      if (find === compare[i]) {
        return i;
      } else if (find < compare[i]) {
        return -1;
      }
    }
    return -1;
  };

  let flag = 0;
  for (let i = 0; i < sample.length; i++) {
    flag = checkArr(sample[i], base, flag);
    if (flag === -1) {
      return false;
    }
  }
  return true;
}
