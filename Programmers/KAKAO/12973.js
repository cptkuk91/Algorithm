function solution(s) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (result[result.length - 1] === s.charAt(i)) {
      result.pop();
    } else {
      result.push(s.charAt(i));
    }
  }

  return result.length === 0 ? 1 : 0;
}
