function solution(numbers, target) {
  let result = 0;
  console.log(numbers[1]);

  dfs(0, 0);
  function dfs(count, sum) {
    if (count === numbers.length) {
      if (sum === target) {
        result++;
        console.log(result);
      }
      return;
    }
    dfs(count + 1, sum + numbers[count]); // 결과가 충족하지 못했을 때 아래 빼기로
    dfs(count + 1, sum - numbers[count]);
  }

  return result;
}
