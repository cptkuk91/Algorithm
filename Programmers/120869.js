function solution(spell, dic) {
  let spellSort = spell.sort().join("");
  let tmp = dic.map((word) => word.split("").sort().join(""));

  for (let i = 0; i < tmp.length; i++) {
    if (spellSort === tmp[i]) {
      return 1;
    }
  }
  return 2;
}
