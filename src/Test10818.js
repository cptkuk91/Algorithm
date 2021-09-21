const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    const N = Number(input[0]);
    const numbers = input[1].split(' ').map(Number);

    numbers.sort((a, b) => a-b);
    console.log(numbers[0], numbers[N-1]);

    process.exit();
});