function solution(n) {
  let splited = String(n).split("");
  let answer = splited.sort();
  let result = answer.reverse().join("");
  return result * 1;
}
