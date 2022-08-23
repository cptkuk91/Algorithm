function createMatrix(edges) {
  // result의 최대 크기를 구해야한다.
  let max = 0;
  for (let i = 0; i < edges.length; i++) {
    let currentMax = Math.max(...edges[i].slice(0, 2));
    currentMax > max ? (max = currentMax) : null;
    console.log(currentMax);
  }

  // 우선 result를 0으로 채워야한다.
  // 배열이니까 + 1해줘야 한다. 0부터 시작해서
  let result = new Array(max + 1)
    .fill(0)
    .map((el) => new Array(max + 1).fill(0));

  edges.forEach((edge) => {
    const [row, col, location] = edge;
    if (location === "undirected") {
      result[col][row] = 1;
    }
    result[row][col] = 1;
  });

  return result;
}
