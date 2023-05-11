function solution(targets) {
  let answer = 0;
  targets.sort((a, b) => a[0] - b[0]);

  let checkAnswer = null;

  for (let i = 0; i < targets.length; i++) {
    if (checkAnswer && checkAnswer[1] > targets[i][0]) {
      checkAnswer[1] = Math.min(checkAnswer[1], targets[i][1]);
    } else {
      checkAnswer = targets[i];
      answer++;
    }
  }
  return answer;
}
