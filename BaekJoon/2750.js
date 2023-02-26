const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("\n");

input.shift();

let sortInput = input.sort((a, b) => a - b);

for (let i = 0; i < sortInput.length; i++) {
  console.log(input[i]);
}

// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

// let tmp = [];
// for(let i = 1; i < input.length; i++){
//     tmp.push(input[i]);
//     tmp.sort((a, b) => a - b);
// }

// for(let j = 0; j < tmp.length; j++){
//     console.log(tmp[j]);
// }
