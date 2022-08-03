function solution(n) {
  // 피보나치 수열에서 0번째, 1번째 값은 0과 1로 고정된다.
  let result = [0, 1];
  let fibo = (n) => {
    if (result[n] !== undefined) {
      // 만약 있는 숫자라면 그대로 출력한다.
      return result[n];
    } else {
      // 만약 없는 숫자라면 피보나치 수열 구하는 공식을 통해 result[]에 넣어준다.
      result[n] = fibo(n - 1) + fibo(n - 2);
      return result[n];
    }
  };
  return fibo(n);
}
