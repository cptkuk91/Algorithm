let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let resultArr = [];
let result = '';

for(let i = 97; i <= 122; i++){
    let alphabet = String.fromCharCode(i);
    // a,b,c,d,e,f,g,h...z

    // baekjoon
    // [0] = b
    // [1] = a
    // [2] = e
    // [3] = k
    for(let j = 0; j < input.length; j++){
        resultArr.push(input[j].indexOf(alphabet));
        // indexOf 를 통해 나머지 값을 -1 로 출력
        // a, b, c, d, e, f, g, ...
        // b = 0; a = 1; e = 2;
        // -1 -1 -1 -1 -1 -1 -1 -1...
        // 1   0 -1 -1 2 ...
    }
}

result = resultArr.join('');
console.log(result);

