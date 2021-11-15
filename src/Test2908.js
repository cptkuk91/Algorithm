let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num1 = Number(input[0].split('').reverse().join(''));
let num2 = Number(input[1].split('').reverse().join(''));

if(num1 > num2){
    console.log(num1);
} else {
    console.log(num2);
}