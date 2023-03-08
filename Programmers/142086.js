function solution(s) {
  let result = [];
  let tmp = [];

  for (let i = 0; i < s.length; i++) {
    if (!tmp.includes(s[i])) {
      result.push(-1);
      tmp.push(s[i]);
    } else if (tmp.includes(s[i])) {
      result.push(i - tmp.lastIndexOf(s[i]));
      tmp.push(s[i]);
    }
  }
  return result;
}
