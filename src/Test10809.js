let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let resultArr = [];
let result = '';

// baekjoon
for (let i = 97; i <= 122; i++) {
    let alphabet = String.fromCharCode(i);
    // 아스키코드를 통해서 a,b,c 소문자 알파벳 소환
    // a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p

    //input.length === 8개
    for (let j = 0; j < input.length; j++) {
        resultArr.push(input[j].indexOf(alphabet));
        // -1 -1 -1 -1 -1 -1 -1 ...
        // 1, 0 -1 -1 2
        // 1 0 -1 -1 2(e) -1 ...
    }
}

result = resultArr.join(' ');
console.log(result);


