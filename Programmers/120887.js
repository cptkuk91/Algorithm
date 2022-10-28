function solution(i, j, k) {
  let result = 0;

  for (let x = i; x <= j; x++) {
    result += [...("" + x)].filter((x) => +x === k).length;
  }

  return result;
}
