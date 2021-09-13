// 8393번 합

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    let T = Number(input[0]);
    let sum = 0;

    for (let i = 1; i <= T; i++) {
        sum += i;
    }
    console.log(sum);

    process.exit();
});