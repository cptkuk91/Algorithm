function getGcd(a, b) {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
}

function solution(arr) {
  return arr.reduce((acc, cur) => (acc * cur) / getGcd(acc, cur));
}
