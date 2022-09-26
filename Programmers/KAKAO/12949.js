function solution(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let newResult = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let flag = 0;
      for (let z = 0; z < arr2.length; z++) {
        flag += arr1[i][z] * arr2[z][j];
      }
      newResult.push(flag);
    }
    result.push(newResult);
  }
  return result;
}
