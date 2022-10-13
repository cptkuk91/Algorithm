function solution(num_list) {
  let result = [0, 0];

  console.log(result[0]);

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      result[0]++;
    } else {
      result[1]++;
    }
  }

  return result;
}
