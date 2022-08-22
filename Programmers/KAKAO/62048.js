function gcd(w, h) {
  let getGcd = w % h;

  if (getGcd === 0) {
    return h;
  }

  return gcd(h, getGcd);
}

function solution(w, h) {
  let result = 0;

  let getSquare = gcd(w, h);
  result = w * h - (w + h - getSquare);

  return result;
}
