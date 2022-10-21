function solution(my_string, num1, num2) {
  let str = [...my_string];

  console.log(str);

  [str[num1], str[num2]] = [str[num2], str[num1]];

  return str.join("");
}
