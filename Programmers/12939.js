function solution(s) {
  let answer = "";
  let result = s.split(" ");
  let max = Math.max(...result);
  let min = Math.min(...result);
  return (answer = min + " " + max);
}
