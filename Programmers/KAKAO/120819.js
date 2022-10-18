function solution(money) {
  let result = [];
  let flag = 0;
  let coffee = 5500;
  let rest = money;

  while (rest >= coffee) {
    flag++;
    rest -= coffee;
  }

  result.push(flag, rest);

  return result;
}
