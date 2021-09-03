const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const input = line.split(' ');

    const result1 = Number(input[0]) + Number(input[1]);
    const result2 = Number(input[0]) - Number(input[1]);
    const result3 = Number(input[0]) * Number(input[1]);
    const result4 = Math.floor(Number(input[0]) / Number(input[1]));
    const result5 = Number(input[0]) % Number(input[1]);

    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
    console.log(result5);

    rl.close();
}).on('close', function () {
    process.exit();
});