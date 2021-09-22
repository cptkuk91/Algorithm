const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let multiply = 1;
for(let i = 0; i < 3; i++){
    multiply *= Number(input[i]);
}

const multiStr = String(multiply);

const digit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for(let i = 0; i< 10; i++){
    digit[Number(multiStr[i])] += 1;
}

digit.forEach(function (cur){
   console.log(cur);
});