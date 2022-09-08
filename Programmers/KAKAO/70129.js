function solution(s) {
  let result = [];

  let count = 0; // 지금까지 1개의 숫자가 남을 때 까지 몇 번 2진 변환을 했는가.
  let zeroCount = 0;

  while (s.length > 1) {
    let num = 0; // 숫자 1
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === "0") {
        zeroCount++;
      } else {
        num++;
      }
    }
    s = num.toString(2); // 2진 변환 공식
    count++;
  }

  result = [count, zeroCount];

  return result;
}
