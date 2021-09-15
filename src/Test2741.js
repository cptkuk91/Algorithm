let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for(let i = 1; i <= input; i++){
    answer += i + '\n';
}

console.log(answer);

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
//     const input = Number(line);
//
//     for (let i = 1; i <= input; i++) {
//         console.log(i);
//     }
//
// }).on('close', function () {
//     process.exit();
// })