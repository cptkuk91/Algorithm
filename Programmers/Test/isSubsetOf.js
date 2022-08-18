function solution(base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const checkSubset = (origin, compare, from) => {
    for (let i = from; i < compare.length; i++) {
      if (origin === compare[i]) {
        return i;
      } else if (origin < compare[i]) {
        return -1;
      }
    }
    return -1;
  };

  let flag = 0;
  for (let i = 0; i < sample.length; i++) {
    flag = checkSubset(sample[i], base, flag);
    if (flag === -1) {
      return false;
    }
  }
  return true;
}
