function solution(cipher, code) {
  let result = "";

  let forSplit = [...cipher];

  for (let i = code - 1; i < forSplit.length; i += code) {
    result += forSplit[i];
  }

  return result;
}
