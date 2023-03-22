function solution(k, m, score) {
  let result = 0;

  let sortScore = score.sort((a, b) => b - a);

  let tmp = [];
  for (let i = 0; i < sortScore.length; i += m) {
    if (sortScore.slice(i, i + m).length === m) {
      tmp.push(sortScore.slice(i, i + m));
    }
  }

  for (let i = 0; i < tmp.length; i++) {
    result += tmp[i].length * Math.min.apply(null, tmp[i]);
  }
  return result;
}
