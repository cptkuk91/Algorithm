// substr과 join 중요한 문제
function solution(str) {
  let result = "";

  let newStr = str.split(" ");

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > 0) {
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substr(1);
    }
  }

  result = newStr.join(" ");

  return result;
}
