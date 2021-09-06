const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const input = line.split(' ');
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);

    if (num1 > num2) {
        console.log(">");
    } else if (num1 < num2) {
        console.log("<");
    } else {
        console.log("==");
    }

    rl.close();
}).on('close', function () {
    process.exit();
})