function solution(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    let tmp = a[i] * b[i];
    result += tmp;
  }
  return result;
}
