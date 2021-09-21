var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length; i++) {
    const A = parseInt(input[i].split(' ')[0]);
    const B = parseInt(input[i].split(' ')[1]);
    const result = A + B;

    if (!result) {
        break;
    } else {
        console.log(result);
    }
}