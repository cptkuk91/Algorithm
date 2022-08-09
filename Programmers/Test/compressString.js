// 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴
function solution(str) {
  let count = 1;
  let before = str[0];
  let result = "";

  // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
  str = str + " ";
  for (let i = 1; i < str.length; i++) {
    if (before === str[i]) {
      count++;
    } else {
      if (count >= 3) {
        result += `${count}${before}`;
      } else {
        result += before.repeat(count);
      }
      count = 1;
      before = str[i];
    }
  }
  return result;
}
