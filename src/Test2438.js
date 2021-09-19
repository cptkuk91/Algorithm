const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const T = +line;
    let star = '';

    for(let i = 1; i <= T; i++){
        star += '*';
        console.log(star);
    }
}).on('close', function () {
    process.exit();
});