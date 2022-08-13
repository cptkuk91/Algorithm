function solution(arr) {
  let result = "";

  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (temp.length === j) {
        temp.push(str[j]);
      } else {
        temp[j] += str[j];
      }
    }
  }

  for (let k = 0; k < temp.length; k++) {
    result += temp[k];
  }

  return result;
}
