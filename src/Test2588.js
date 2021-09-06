const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const Num1 = input[0];
const Num2 = input[1];

const oneNum = Num2 % 10;
const tenNum = Math.floor((Num2 % 100) / 10);
const hundredNum = Math.floor(Num2 / 100);

console.log(Num1 * oneNum);
console.log(Num1 * tenNum);
console.log(Num1 * hundredNum);
console.log(Num1 * Num2);

//
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//
// const Num1 = input[0];
// const Num2 = input[1];
//
// const oneNum = Num2 % 10;
// const tenNum = Math.floor((Num2 % 100) /10);
// const hundredNum = Math.floor(Num2 / 100);
//
// console.log(Num1 * oneNum);
// console.log(Num1 * tenNum);
// console.log(Num1 * hundredNum);
// console.log(Num1 * Num2);