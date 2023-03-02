const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("")
  .map(Number);

console.log(input.sort((a, b) => b - a).join(""));
