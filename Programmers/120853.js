function solution(s) {
  let result = [];

  let tmp = s.split(" ");

  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] !== "Z") {
      result.push(tmp[i]);
    } else if (tmp[i] === "Z") {
      result.pop();
    }
  }

  return result.reduce((a, b) => a * 1 + b * 1, 0);
}
