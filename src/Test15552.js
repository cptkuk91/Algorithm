let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let max = Number(input[0]);
let answer = '';

for (let i = 1; i <= max; i++) {
    let num = input[i].split(' ');
    answer += Number(num[0]) + Number(num[1]) + '\n';
}

console.log(answer);

// 아래와 같이 readline을 사용할 경우 시간 초과

// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// let input = [];
//
// rl.on('line', function (line) {
//     input.push(line);
// }).on('close', function () {
//     const T = Number(input[0]);
//
//     for (let i = 1; i <= T; i++) {
//         let a = Number(input[i].split(' ')[0]);
//         let b = Number(input[i].split(' ')[1]);
//         console.log(a + b);
//     }
//     process.exit();
// })