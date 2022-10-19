function solution(rsp) {
  let result = { 2: 0, 0: 5, 5: 2 };
  return [...rsp].map((el) => result[el]).join("");
}
