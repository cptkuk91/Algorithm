const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const input = line.split(' ');

    // 반드시 let을 사용해야 합니다.
    // let은 변수 재할당이 가능하지만, const는 재선언, 재할당이 불가능합니다.
    let hour = Number(input[0]);
    let minute = Number(input[1]);

    if (minute - 45 < 0) {
        minute = 60 + (minute - 45);
        hour -= 1;
        if (hour === -1) {
            hour = 23;
        }
    } else {
        minute -= 45;
    }

    console.log(hour + ' ' + minute);

}).on('close', function () {
    process.exit();
});