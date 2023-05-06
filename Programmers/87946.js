function solution(k, dungeons) {
  let answer = 0;

  function dfs(visited, tmpK, count) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && tmpK >= dungeons[i][0]) {
        visited[i] = true;
        dfs(visited, tmpK - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, count);
  }
  let visited = Array(dungeons.length).fill(false);
  dfs(visited, k, 0);
  return answer;
}
