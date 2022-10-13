function solution(price) {
  if (price >= 100000 && price < 300000) {
    return Math.floor(price * 0.95);
  }

  if (price >= 300000 && price < 500000) {
    return Math.floor(price * 0.9);
  }

  if (price >= 500000) {
    return Math.floor(price * 0.8);
  }

  return price;
}
