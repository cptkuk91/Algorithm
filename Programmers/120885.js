function solution(bin1, bin2) {
  let result = "";

  let ben1 = parseInt(bin1, 2);
  console.log(ben1);
  let ben2 = parseInt(bin2, 2);

  result = (ben1 + ben2).toString(2);

  return result;
}
