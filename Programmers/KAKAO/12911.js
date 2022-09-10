function solution(n) {
  let first = n.toString(2).match(/1/g).length;
  while (true) {
    n++;
    if (n.toString(2).match(/1/g).length === first) {
      return n;
    }
  }
}
