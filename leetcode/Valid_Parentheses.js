// 괄호 열고 닫고 문제
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  let start = ["(", "[", "{"];
  let finish = [")", "]", "}"];

  for (let i = 0; i < s.length; i++) {
    if (start.includes(s[i])) {
      stack.push(s[i]);
    } else if (finish.includes(s[i])) {
      let stackPop = stack.pop();
      if (start.indexOf(stackPop) === finish.indexOf(s[i])) {
        continue;
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
