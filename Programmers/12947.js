function solution(x) {
  let total = 0;
  let result = String(x).split("");
  for (let i = 0; i < result.length; i++) {
    total += Number(result[i]);
  }
  if (x % total === 0) {
    return true;
  } else {
    return false;
  }
}
