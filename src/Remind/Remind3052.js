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

//공부해라
restNum.forEach(function (num) {
    if (digit.indexOf(num) === -1) {
        // 없으면 넣는다.
        // 이미 들어가 있으면 안넣는다.
        digit.push(num);
    }
})

console.log(digit.length);