function solution(n) {
  let result = 0;

  let makeString = n.toString();
  console.log(makeString);

  let splitWord = makeString.split("");
  console.log(splitWord);

  for (let i = 0; i < splitWord.length; i++) {
    result += Number(splitWord[i]);
  }

  return result;
}
