// join을 활용한 문자열 합치기 (첫글자만..);

function solution(str) {
  let result = "";
  let newStr = str.split(" ");

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > 0) {
      newStr[i] = newStr[i][0];
    }
  }
  result = newStr.join("");

  return result;
}
