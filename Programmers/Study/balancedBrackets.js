const balancedBrackets = function (str) {
  let result = [];
  let start = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let finish = ")}]";

  for (let i = 0; i < str.length; i++) {
    if (str[i] in start) {
      result.push(str[i]);
    } else if (finish.includes(str[i])) {
      let top = result.pop();
      let pair = start[top];
      if (pair !== str[i]) {
        return false;
      }
    }
  }
  return result.length === 0;
};
