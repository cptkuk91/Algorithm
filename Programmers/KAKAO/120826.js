function solution(my_string, letter) {
  let result = "";

  let splitWord = my_string.split("");

  for (let i = 0; i < splitWord.length; i++) {
    if (splitWord[i] !== letter) {
      result += splitWord[i];
    }
  }

  return result;
}
