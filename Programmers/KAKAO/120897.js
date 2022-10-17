function solution(n) {
  let answer = [];
  let index = 1;

  while (index <= n) {
    if (n % index == 0) {
      answer.push(index);
    }
    index++;
  }

  return answer;
}
