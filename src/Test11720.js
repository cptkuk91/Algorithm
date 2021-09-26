let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]); // 1
let num2 = input[1].split('');
let sum = 0; // 1

for (let i = 0; i < num; i++) {
    sum += Number(num2[i]);
}

console.log(sum);