// function solution(balls, share) {
// 	return factorial(balls) / (factorial(balls - share) * factorial(share));
// }

// function factorial(number){
// 	let basic = BigInt(1);

//     for(let i = 2; i <= number; i++){
//     	basic *= BigInt(i);
//     }
//     return basic;
// }

function solution(balls, share) {
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

function factorial(number) {
  let basic = BigInt(1);

  for (let i = 2; i <= number; i++) {
    basic *= BigInt(i);
  }

  return basic;
}
