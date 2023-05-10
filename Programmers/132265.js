function solution(topping) {
  let answer = 0;
  const len = topping.length;
  const prefixUniqueToppings = new Array(len);
  const suffixUniqueToppings = new Array(len);

  const prefixSet = new Set();
  const suffixSet = new Set();

  for (let i = 0; i < len - 1; i++) {
    prefixSet.add(topping[i]);
    suffixSet.add(topping[len - 1 - i]);

    prefixUniqueToppings[i] = prefixSet.size;
    suffixUniqueToppings[len - 2 - i] = suffixSet.size;
  }

  for (let i = 0; i < len - 1; i++) {
    if (prefixUniqueToppings[i] === suffixUniqueToppings[i]) {
      answer++;
    }
  }

  return answer;
}
