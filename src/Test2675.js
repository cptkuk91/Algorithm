let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let firstCase = Number(input[0]);
let result = '';

for (let i = 1; i <= firstCase; i++) {
    let count = Number(input[i].split(' ')[0]); // 케이스 당 문자 반복 횟수
    let cases = input[i].split(' ')[1]; // 케이스 문자열 분리

    // ex) cases = ABC
    // j 를 통해 0,1,2 를 알 수  있다.
    for (let j = 0; j < cases.length; j++) {
        // count 값을 3을 줬고,
        for (let k = 0; k < count; k++) {
            // AAABBBCCC
            result += cases[j]
        }
    }
    // 다 돌면 엔터를 준다.
    result += '\n';
}

console.log(result);
