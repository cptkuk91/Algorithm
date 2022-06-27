function solution(answers) {
  let tester1 = [1, 2, 3, 4, 5];
  let tester2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let tester3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (tester1[i % tester1.length] === answers[i]) {
      result[0]++;
    }

    if (tester2[i % tester2.length] === answers[i]) {
      result[1]++;
    }

    if (tester3[i % tester3.length] === answers[i]) {
      result[2]++;
    }
  }

  let max = Math.max(...result);
  let answer = [];
  for (let j = 0; j < result.length; j++) {
    if (result[j] === max) {
      answer.push(j + 1);
    }
  }
  return answer;
}
