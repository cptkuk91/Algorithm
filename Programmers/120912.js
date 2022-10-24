function solution(array) {
  return [...array.join("")].filter((el) => el === "7").length;
}
