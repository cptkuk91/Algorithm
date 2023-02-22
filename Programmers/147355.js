function solution(t, p) {
  let result = 0;

  let tmp = [];

  for (let i = 0; i < t.length - p.length + 1; i++) {
    tmp.push(t.substring(i, i + p.length));
  }

  for (let j = 0; j < tmp.length; j++) {
    if (+tmp[j] <= +p) {
      result++;
    }
  }

  return result;
}
