let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);

for (let i = 1; i <= number; i++) {
    let count = 0;
    let sum = 0;
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 'O') {
            count++;
        // count + count = 2? why 3?
        // why 중단 후 처음부터 다시 count + 1?
        } else {
            count = 0;
        }
        sum += count;
        // sum = count + sum
        // sum = count + sum
    }
    console.log(sum);
}