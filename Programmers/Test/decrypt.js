function solution(str, secret) {
  let result = "";
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += " ";
    } else {
      let current = alpha.indexOf(str[i]);
      let after = (current - secret + alpha.length) % alpha.length;
      result += alpha[after];
    }
  }
  return result;
}
