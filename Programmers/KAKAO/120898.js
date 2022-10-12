function solution(message) {
  let result = 0;

  let forCount = message.split("");
  console.log(forCount);

  for (let i = 0; i < forCount.length; i++) {
    result = Math.max(i + 1) * 2;
  }

  return result;
}
