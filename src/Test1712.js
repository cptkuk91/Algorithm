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
  // 1000 / (170 - 70) + 1
  // 1000 / 100 + 1
  // 11

//   B >= C ? console.log(-1) : console.log(result);
