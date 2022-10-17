function solution(sides) {
  let max = sides.sort((a, b) => b - a);
  let total = 0;

  for (let i = 1; i < max.length; i++) {
    total += max[i];
  }

  if (max[0] < total) {
    return 1;
  } else {
    return 2;
  }
}
