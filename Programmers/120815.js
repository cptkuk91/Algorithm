function solution(n) {
  let pizzaSlice = 6;

  for (let i = 1; i < 100; i++) {
    if ((pizzaSlice * i) % n === 0) {
      return i;
    }
  }
}
