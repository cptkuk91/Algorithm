function solution(s) {
  let tmp = {};

  s.split("").forEach((el) =>
    tmp[el] === undefined ? (tmp[el] = 1) : (tmp[el] += 1)
  );

  return Object.entries(tmp)
    .map((el) => (el[1] === 1 ? el[0] : null))
    .filter((el) => el !== null)
    .sort()
    .join("");
}
