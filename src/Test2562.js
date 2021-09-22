const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    const numbers = input.map((x) => Number(x));

    let maxNumber = numbers[0];
    let maxIdx = 0;

    for(let i = 0; i < 9; i++){
        if(maxNumber < numbers[i]){
            maxNumber = numbers[i];
            maxIdx = i;
        }
    }
    console.log(maxNumber);
    console.log(maxIdx + 1);
    // maxIdx 의 경우 0 부터 시작하기 때문이다.

    process.exit();
});