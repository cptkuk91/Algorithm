function solution(numbers) {
  let result = numbers
    .map((el) => el.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return result[0] === "0" ? "0" : result;
}

// 아래 본인 풀이
function solution(numbers) {
  let result = "";

  // 앞 뒤 더하고 큰 값으로 출력하기
  let tmp = numbers.map((el) => el.toString());
  tmp.sort((a, b) => b + a - (a + b));
  console.log(tmp);

  for (let num of tmp) {
    result += num;
  }
  console.log(result[0]);
  if (result[0] === "0") {
    result = "0";
  }
  // 0 밖에 없는 경우 테스트 케이스 11 ===> 0으로 출력하기.
  console.log(typeof result);

  return result;
}
