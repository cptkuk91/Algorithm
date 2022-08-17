function solution(N, K) {
  let result = 0;

  let factorial = (n) => {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  let checkedNum = Array(N + 1).fill(false);

  for (let i = 0; i < K.length; i++) {
    let num = K[i];
    checkedNum[num] = true;
    let candidates = checkedNum.slice(1, num);
    let validNum = candidates.filter((el) => el === false).length;
    let countNum = validNum * factorial(N - i - 1);
    result += countNum;
  }

  return result;
}
