function solution(before, after) {
  let newB = [...before].sort();
  let newA = [...after].sort();
  console.log(newB);

  return newB.filter((el, index) => el === newA[index]).length === newA.length
    ? 1
    : 0;
}
