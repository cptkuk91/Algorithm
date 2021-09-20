const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const T = +line;
    let star = '';
    let blank = '';

    for (let i = 1; i <= T; i++) {
        star += '*';
        for (let j = 0; j < T - i; j++) {
            blank += ' ';
        }
        console.log(blank + star);
        blank = '';
        {/* blank 를 써줘야하는 이유가 무엇인가? */}
    }
}).on('close', function () {
    process.exit();
});