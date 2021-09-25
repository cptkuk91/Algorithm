let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let allCases = Number(input[0]);

for (let i = 1; i <= allCases; i++) {
    let cases = input[i].split(' ');
    // 아래친구는 무엇인가요?
    let scoreCaseCount = Number(cases[0]);
    let sum = 0;

    for (let j = 1; j <= scoreCaseCount; j++) {
        sum += Number(cases[j]);
    }
    let Avg = sum / scoreCaseCount;

    let highScore = 0;
    for (let k = 1; k <= scoreCaseCount; k++) {
        if (Avg < cases[k]) {
            highScore++;
        }
    }

    let result = (highScore / scoreCaseCount * 100).toFixed(3);
    console.log(result + '%');
}