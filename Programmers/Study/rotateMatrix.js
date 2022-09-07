const rotateMatrix = function (matrix, rotateNum = 1) {
  let N = matrix.length;
  // matrix[0] 참이라면 matrix[0].length 를 출력하는 연산자
  let M = matrix[0] && matrix[0].length;

  // 2차원 배열은 4번 돌릴 수 있다.
  rotateNum = rotateNum % 4;

  if (rotateNum === 0) {
    return matrix;
  }

  let result = [];
  let rotateCount = rotateNum % 2 === 1 ? [M, N] : [N, M];

  for (let row = 0; row < rotateCount[0]; row++) {
    result[row] = [];
    for (let col = 0; col < rotateCount[1]; col++) {
      if (rotateNum === 1) {
        result[row][col] = matrix[N - col - 1][row];
      } else if (rotateNum === 2) {
        result[row][col] = matrix[N - row - 1][M - col - 1];
      } else result[row][col] = matrix[col][M - row - 1];
    }
  }
  return result;
};
