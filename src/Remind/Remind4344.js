let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
    let cases = input[i].split(' ');
    let stNum = Number(cases[0]);
    let sum = 0;

    for (let j = 1; j <= stNum; j++) {
        sum += Number(cases[j]);
    //    항사 Number 를 신경 써주자. split으로 인해 문자열로 나눠진 상태기 때문에 Number를 통해 숫자 변환을 해줘야한다.
    }
    let Avg = sum / stNum;

    let highScore = 0;
    for (let k = 1; k <= stNum; k++) {
        if (Avg < cases[k]) {
            highScore++;
        }
    }
    let result = (highScore / stNum * 100).toFixed(3);
    console.log(result + '%');
}