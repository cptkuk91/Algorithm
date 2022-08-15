function solution(str) {
  let result = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
      result += "-";
    }
    result += str[i];
  }

  return result;
}
