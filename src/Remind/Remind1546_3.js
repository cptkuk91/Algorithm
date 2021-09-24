let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let subject = Number(input[0]);

let score = input[1].split(' ');
let scoreNum = [];
for (let i = 0; i < subject; i++) {
    scoreNum.push(Number(score[i]));
}

let maxNum = [];
for (let i = 0; i < scoreNum.length; i++) {
    if (maxNum < scoreNum[i]) {
        maxNum = scoreNum[i];
    }
}

let newScore = scoreNum.map(function (num) {
    return num / maxNum * 100;
});

let total = 0;
for (let i = 0; i < newScore.length; i++) {
    total += newScore[i];
}

console.log(total / subject);