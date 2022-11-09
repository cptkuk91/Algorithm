function solution(emergency) {
  let sorted = [...emergency].sort((a, b) => b - a);
  console.log(sorted);
  return emergency.map((el) => sorted.findIndex((s) => s === el) + 1);
}
