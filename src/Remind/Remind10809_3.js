let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = '';
for (let i = 97; i <= 122; i++) {
    let alpha = input[0].indexOf(String.fromCharCode(i));
    result += alpha + ' ';
}

console.log(result);
