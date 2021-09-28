let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let result = '';

for (let i = 1; i <= testCase; i++) {
    let testR = Number(input[i].split(' ')[0]);
    let charS = input[i].split(' ')[1];

    for (let j = 0; j < charS.length; j++) {
        for (let k = 0; k < testR; k++) {
            result += charS[j];
        }
    }
    result += '\n';
}
console.log(result);