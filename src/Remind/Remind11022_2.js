const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    const T = Number(input[0]);

    for (let i = 1; i <= T; i++) {
        const A = Number(input[i].split(' ')[0]);
        const B = Number(input[i].split(' ')[1]);
        console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
    }

    process.exit();
});