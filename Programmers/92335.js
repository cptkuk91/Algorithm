function solution(n, k) {
  let result = 0;

  let tmp = n.toString(k);

  let checkPrime = new Set();
  checkPrime = tmp.split("0").filter((n) => n);

  checkPrime.forEach((number) => {
    let primeNum = parseInt(number);
    let isPrime = true;
    for (let i = 2, sqrt = Math.sqrt(primeNum); i <= sqrt; i++) {
      if (primeNum % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && primeNum > 1) {
      result++;
    }
  });
  return result;
}
