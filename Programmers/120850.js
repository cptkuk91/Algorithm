function solution(my_string) {
  let result = [];
  const regex = /[^0-9]/g;

  let forResult = my_string.replace(regex, "");
  console.log(forResult);

  for (let i = 0; i < forResult.length; i++) {
    result.push(Number(forResult[i]));
  }
  return result.sort((a, b) => a - b);
}
