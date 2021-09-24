let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
    let stScore = input[i].split(' ');
    let stNum = Number(stScore[0]);
    let sum = 0;

    for (let j = 1; j <= stNum; j++) {
        sum += Number(stScore[j]);
    }

    let Avg = sum / stNum;

    let highScore = 0;
    for (let k = 1; k <= stNum; k++) {
        if (Avg < stScore[k]) {
            highScore++;
        }
    }

    let result = (highScore / stNum * 100).toFixed(3);
    console.log(result + '%');
}

