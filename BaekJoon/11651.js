const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("\n");

const p = input.shift();

let tmp = [];

for (let i = 0; i < input.length; i++) {
  tmp.push(input[i].split(" ").map(Number));
}

let result = "";

tmp
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })
  .forEach((item) => {
    result += `${item[0]} ${item[1]}\n`;
  });

console.log(result);
