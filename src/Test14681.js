const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    const num1 = Number(input[0]);
    const num2 = Number(input[1]);

    if (num1 < 0 && num2 > 0) {
        console.log(2);
    } else if (num1 > 0 && num2 > 0) {
        console.log(1);
    } else if (num1 < 0 && num2 < 0) {
        console.log(3);
    } else if (num1 > 0 && num2 < 0) {
        console.log(4);
    }
    process.exit();
});