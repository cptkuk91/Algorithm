function solution(priorities, location) {
  var answer = 0;

  while (priorities[0]) {
    console.log(priorities);
    let shiftNum = priorities.shift();
    let checkBigNum = priorities.some((item) => item > shiftNum);
    console.log("shiftNum", shiftNum);
    console.log("checkBigNum", checkBigNum);
    if (checkBigNum) {
      priorities.push(shiftNum);
      if (location === 0) {
        location = priorities.length - 1;
        console.log(location);
      } else {
        location--;
        console.log(location);
      }
    } else {
      answer++;
      if (location === 0) {
        break;
      } else {
        location--;
        console.log(location);
      }
    }
  }
  return answer;
}
