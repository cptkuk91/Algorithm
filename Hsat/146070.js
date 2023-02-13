const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();

let tmp = input.split("\n");
const count = Number(tmp.shift());

for (let i = 0; i < count; i++) {
  let result = tmp[i].split(" ").reduce((a, b) => Number(a) + Number(b));
  console.log(`Case #${i + 1}: ${result}`);
}
