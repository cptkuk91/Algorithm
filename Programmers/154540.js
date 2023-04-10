function solution(maps) {
  let result = [];

  maps = maps.map((row) =>
    row.split("").map((cell) => (cell === "X" ? "X" : parseInt(cell, 10)))
  );

  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= maps.length ||
      col >= maps[row].length ||
      maps[row][col] === "X"
    ) {
      return 0;
    }

    let islandSum = maps[row][col];
    maps[row][col] = "X";

    islandSum += dfs(row - 1, col);
    islandSum += dfs(row + 1, col);
    islandSum += dfs(row, col - 1);
    islandSum += dfs(row, col + 1);

    return islandSum;
  }

  for (let row = 0; row < maps.length; row++) {
    for (let col = 0; col < maps[row].length; col++) {
      if (maps[row][col] !== "X") {
        const islandSum = dfs(row, col);
        result.push(islandSum);
      }
    }
  }

  result.sort((a, b) => a - b);

  return result.length === 0 ? [-1] : result;
}
