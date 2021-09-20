const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    const N = +input[0].split(' ')[0];
    const X = +input[0].split(' ')[1];
    const A = input[1].split(' ');
    const result = [];

    for (let i = 0; i < A.length; i++) {
        if (A[i] < X) {
            result.push(A[i]);
        }
    }

    console.log(result.join(' '));

    process.exit();
});