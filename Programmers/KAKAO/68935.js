function solution(n) {
  let result = 0;
  result = n.toString(3).split("").reverse().join("");
  return parseInt(result, 3);
}
