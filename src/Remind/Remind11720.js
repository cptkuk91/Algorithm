let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = input[0];
let num1 = input[1].split('');
let sum = 0;

for (let i = 0; i < num; i++) {
    sum += Number(num1[i]);
}

console.log(sum);