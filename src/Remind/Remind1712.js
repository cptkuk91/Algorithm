const fs = require("fs");
const [...arr] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000 70 170`
)
  .trim()
  .split(" ");

let A = Number(arr[0]);
let B = Number(arr[1]);
let C = Number(arr[2]);

let result = Math.floor(A / (C - B)) + 1;

if (B >= C) {
    console.log(-1);
} else {
    console.log(result);
}
