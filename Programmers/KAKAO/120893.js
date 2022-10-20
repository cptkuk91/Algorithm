function solution(my_string) {
  let answer = "";

  for (let word of my_string) {
    if (word == word.toUpperCase()) answer += word.toLowerCase();
    else answer += word.toUpperCase();
  }
  return answer;
}
