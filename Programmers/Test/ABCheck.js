function solution(str) {
  str = str.toLowerCase();

  for (let i = 4; i < str.length; i++) {
    if (
      (str[i] === "a" && str[i - 4] === "b") ||
      (str[i] === "b" && str[i - 4] === "a")
    ) {
      return true;
    }
  }
  return false;
}
