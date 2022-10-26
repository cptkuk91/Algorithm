function solution(my_string) {
  let result = "";

  let newArray = [];
  let tmp = [...my_string];

  for (let i = 0; i < tmp.length; i++) {
    // 만약 뒤에 문자가 이미 newArray에 들어있다면 push하지 않는다.
    if (newArray.includes(tmp[i])) continue;
    else newArray.push(tmp[i]);
    console.log(newArray);
  }
  result = newArray.join("");

  return result;
}
