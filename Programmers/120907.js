function solution(quiz) {
  let result = [];

  for (let i = 0; i < quiz.length; i++) {
    let tmpQuiz = quiz[i];
    let [left, calculate, right, equal, answer] = tmpQuiz.split(" ");
    let checkResult = eval(`${left} ${calculate} ${right}`);

    if (checkResult.toString() === answer) {
      result.push("O");
    } else {
      result.push("X");
    }
  }

  return result;
}
