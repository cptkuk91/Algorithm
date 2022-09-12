function solution(n, words) {
  let result = [0, 0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let person = (i % n) + 1;
    let checkTurn = Math.ceil((i + 1) / n);

    if (i > 0) {
      let last = words[i - 1].split("").pop();

      if (words[i][0] !== last || i > words.indexOf(word)) {
        result = [person, checkTurn];
        break;
      }
    }
  }
  return result;
}
