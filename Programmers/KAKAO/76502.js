function solution(s) {
  let result = 0;

  let stack = [];

  let flag = true;

  if (s.length % 2 === 1) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    let tmp = s.slice(i) + s.slice(0, i);
    flag = true;
    for (let word of tmp) {
      if (word === "(" || word === "[" || word === "{") {
        stack.push(word);
      } else {
        let leftword = stack.pop();
        if (word === ")" && leftword === "(") continue;
        if (word === "}" && leftword === "{") continue;
        if (word === "]" && leftword === "[") continue;
        flag = false;
        break;
      }
    }
    if (flag) result++;
  }
  return result;
}
