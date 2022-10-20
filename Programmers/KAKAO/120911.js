function solution(my_string) {
  return [...my_string]
    .map((el) => el.toLowerCase())
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .join("");
}
