let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let word = input[0];
let result = word.charCodeAt(0);

console.log(result);