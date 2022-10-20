function solution(num, k) {
  let result = [];
  result = [...("" + num)].findIndex((el) => +el === k);
  return result === -1 ? -1 : result + 1;
}
