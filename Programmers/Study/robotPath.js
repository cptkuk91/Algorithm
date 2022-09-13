const robotPath = function (room, src, dst) {
  const checkRoute = (M, N, current, count) => {
    const [row, col] = current;

    if (row < 0 || col < 0 || row >= M || col >= N) return;

    if (room[row][col] === 0 || room[row][col] > count) {
      room[row][col] = count;
    } else {
      // 방해물 1 또는 count 보다 커 최단 경로가 아닌 경우
      return;
    }
    checkRoute(M, N, [row + 1, col], count + 1);
    checkRoute(M, N, [row - 1, col], count + 1);
    checkRoute(M, N, [row, col + 1], count + 1);
    checkRoute(M, N, [row, col - 1], count + 1);
  };

  checkRoute(room.length, room[0].length, src, 1);
  const [row, col] = dst;
  return room[row][col] - 1;
};
