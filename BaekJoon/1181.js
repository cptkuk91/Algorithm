const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("\n");

const p = input.shift();
const tmp = [];

for (let i = 0; i < input.length; i++) {
  if (typeof input[i] === "string") {
    tmp.push(input[i]);
  }
}

const set = new Set(tmp);
const newArr = [...set];

let result = newArr.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
