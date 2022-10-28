function solution(n) {
  let result = 0;

  function factorial(n) {
    let tmp = 1;
    for (let i = 1; i <= n; i++) {
      tmp = tmp * i;
    }
    return tmp;
  }

  for (let i = 1; i <= 10; i++) {
    if (factorial(i) <= n) {
      result++;
    }
  }

  return result;
}
