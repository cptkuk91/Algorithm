function solution(players, callings) {
  let result = new Map();

  for (let i = 0; i < players.length; i++) {
    result.set(players[i], i);
  }

  for (let calling of callings) {
    const cur = result.get(calling);
    console.log("calling", calling, cur);

    if (cur > 0) {
      const bPlayer = players[cur - 1];

      players[cur] = bPlayer; // 역전 당한 선수
      players[cur - 1] = calling; // 현재 선수

      result.set(calling, cur - 1); // 역전한 현재 선수의 키값은 -1해서 넣어주기
      result.set(bPlayer, cur); // 역전 당한 선수의 키값은 현재값으로,
    }
  }

  return players;
}
