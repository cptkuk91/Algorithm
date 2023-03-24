function solution(numer1, denom1, numer2, denom2) {
  let result = [];

  let num1 = numer1 * denom2 + numer2 * denom1; // 분자
  console.log(num1);
  let num2 = denom1 * denom2;
  console.log(num2);
  function getGCD(num1, num2) {
    let gcd = 1;

    for (let i = 2; i <= Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
      }
    }

    return [num1 / gcd, num2 / gcd];
  }

  return getGCD(num1, num2);
}
