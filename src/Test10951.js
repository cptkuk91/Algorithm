const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length; i++) {
    const A = parseInt(input[i].split(' ')[0]);
    const B = parseInt(input[i].split(' ')[1]);
    const result = A + B;

    if (result) {
        console.log(result);
    } else {
        break;
    }
}

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
//
//     for (let i = 0; ; i++) {
//         const A = input[0].split(' ')[0];
//         const B = input[0].split(' ')[0];
//         const result = A + B;
//
//         if (result < 0) {
//             break;
//         } else {
//             console.log(result);
//         }
//     }
//
//     process.exit();
// });