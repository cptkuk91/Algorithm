const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = [];

// 숫자 10개를 일단 소환하자.
for (let i = 0; i < 10; i++) {
    numbers.push(Number(input[i]));
}

// 각 숫자를 42로 나눈 나머지 값들로 저장하자.
let restNum = numbers.map(function (num){
    return num % 42;
});

// 서로 다른 수를 구하기 위해서
let digit = [];
// forEach 를 통해서 각각의 수를 나눠주고
restNum.forEach(function (num){
    if(digit.indexOf(num) === -1){
        digit.push(num);
    }
});

console.log(digit.length);