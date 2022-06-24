function solution(participant, completion) {
  let result = "";
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return (result = participant[i]);
    }
  }
}
