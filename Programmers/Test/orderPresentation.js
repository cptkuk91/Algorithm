function solution(N, K) {
  let result = 0;

  const factorial = (n) => {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };

  let usedNum = Array(N + 1).fill(false);

  for (let i = 0; i < K.length; i++) {
    let inputNum = K[i];
    usedNum[inputNum] = true;
    let waitingNum = usedNum
      .slice(1, inputNum)
      .filter((el) => el === false).length;
    let cnt = waitingNum * factorial(N - i - 1);
    result += cnt;
  }
  return result;
}
