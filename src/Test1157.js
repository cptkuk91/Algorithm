//
//
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//
// let alphCountArr = [];
// let maxCount = 0;
// let answer;
// let words = input[0].toUpperCase().split('');
// let overlapCount = 0;
//
// let a = 'A'.charCodeAt();
// let z = 'Z'.charCodeAt();
//
// for (let i = a; i <= z; i++) {
//     let count = 0;
//     let alph = String.fromCharCode(i);
//     let position = words.indexOf(alph);
//     while (position !== -1) {
//         count++;
//         position = words.indexOf(alph, position + 1);
//         if (count >= maxCount) {
//             maxCount = count;
//             answer = String.fromCharCode(i);
//         }
//     }
//     alphCountArr.push(count);
// }