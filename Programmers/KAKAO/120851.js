function solution(my_string) {
  let result = 0;
  let lowerString = my_string.toLowerCase();
  let numString = lowerString.replace(/[abcdefghijklmnopqrstuvwxyz]/g, "");
  console.log(numString);

  let newString = numString.split("");
  console.log(newString);

  for (let i = 0; i < newString.length; i++) {
    result += Number(newString[i]);
  }

  return result;
}
