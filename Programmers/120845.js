function solution(box, n) {
  let garo = Math.floor(box[0] / n);
  let sero = Math.floor(box[1] / n);
  let height = Math.floor(box[2] / n);

  return garo * sero * height;
}
