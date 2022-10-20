function solution(hp) {
  let general = 0;
  let soldier = 0;
  let worker = 0;

  general = Math.floor(hp / 5);
  soldier = Math.floor((hp - general * 5) / 3);
  worker = Math.floor(hp - general * 5 - (soldier * 3) / 1);

  return general + soldier + worker;
}
