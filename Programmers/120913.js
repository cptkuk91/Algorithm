function solution(my_str, n) {
  let answer = [];

  for (let i = 0; i < my_str.length / n; i++) {
    answer = [...answer, my_str.slice(i * n, i * n + n)];
  }

  return answer;
}
