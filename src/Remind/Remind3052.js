const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(Number(input[i]));
}

let restNum = numbers.map(function (num) {
    return num % 42;
})

let digit = [];

restNum.forEach(function (num) {
    if (digit.indexOf(num) === -1) {
        digit.push(num);
    }
})

console.log(digit.length);