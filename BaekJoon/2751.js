const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("\n");

let tmp = [];

for (let i = 1; i < input.length; i++) {
  tmp.push(input[i]);
}

tmp.sort((a, b) => a - b);

console.log(tmp.join("\n"));
