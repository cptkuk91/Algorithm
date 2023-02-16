// const input = require("fs").readFileSync("/dev/stdin");

// honeyHouse(input);

// function honeyHouse(number){
//     number;
//     let block = 1;
//     let result = 1;
//     // 27
//     while(true){
//         if(number <= block){
//             break;
//         }
//         block = block + result * 6;
//         // 1 = 1 + 6 => 7
//         // 7 = 7 + 12 => 19
//         // 19 = 19 + 18 => 37
//         result++;
//         // 2
//         // 3
//         // 4
//     }
//     console.log(result);
// }

const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();

let block = 1,
  count = 1;

while (true) {
  if (input <= block) {
    break;
  }
  block = block + count * 6;
  count++;
}

console.log(count);
