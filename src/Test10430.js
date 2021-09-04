const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const input = line.split(' ');

    let num1 = Number(input[0]);//A
    let num2 = Number(input[1]);//B
    let num3 = Number(input[2]);//C

    const result1 = (num1 + num2) % num3;
    const result2 = ((num1 % num3) + (num2 % num3)) % num3;
    const result3 = (num1 * num2) % num3;
    const result4 = ((num1 % num3) * (num2 % num3)) % num3;

    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);

    rl.close();
}).on('close', function () {
    process.exit();
});