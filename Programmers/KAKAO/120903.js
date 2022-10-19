function solution(s1, s2) {
  let result = 0;

  for (let i = 0; i < s2.length; i++) {
    if (s1.includes(s2[i])) {
      console.log(s2[i]);
      result++;
    }
  }
  return result;
}
