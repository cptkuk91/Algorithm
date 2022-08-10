function solution(str) {
  let result = 0;
  let newStr = "";
  const digits = "0123456789";

  if (str.length === 0) {
    return 0;
  }

  for (let i = 0; i < str.length; i++) {
    if (digits.includes(str[i])) {
      result += Number(str[i]);
    } else if (str[i] !== " ") {
      newStr += str[i];
    }
  }
  return Math.round(result / newStr.length);
}
