function solution(order) {
  let result = 0;

  let clap = [...("" + order)];
  console.log(clap);

  for (let i = 0; i < clap.length; i++) {
    if (Number(clap[i]) > 0 && Number(clap[i]) % 3 === 0) {
      result++;
    }
  }

  return result;
}
