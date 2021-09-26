let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = '';

for (let i = 97; i <= 122; i++) {
    let alpha = input[0].indexOf(String.fromCharCode(i));
    // input[0] ex)baekjoon 값에서 indexOf 를 통해 ex) fromCharCode(97) === 'a' 를 찾는다고 한다.
    // alpha = 1
    // 돌아서 98인 b 를 찾는다고 했을 때 b 는 0 값이기 때문에 0
    // result += alpha + ' '; 을 통해 현재 (a,b) 한 결과
    // 1, 0,
    // 99인 c를 찾지만 c를 input[0] ex) baekjoon 에서 찾을 수 없기 때문에 indexOf 문법에 따라
    // -1 을 반환한다.
    // 1, 0, -1
    // d도 같다.
    // 하지만 indexOf는 기본값으로 첫 값을 찾기 때문에 baekjoon o, o 가 두 개지만 첫 번 째 o 만 입력한다.
    result += alpha + ' ';
}

console.log(result);

// let fs = require('fs');
//
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// // input[0] = 'baekjoon'
//
// // let alphaArr = []
// let result = ''
//
// for (let i = 97; i <= 122; i++){
//     let index = input[0].indexOf(String.fromCharCode(i)) // input[0]에서 String(i)의 첫번째 위치를 찾아라
//     result += index + ' '
//     // alphaArr.push = String(i);
//     // // a, b, c, d, e, f, g
//
//     // // input.length = baekjoon 8자리
//     // for (let j = 0; j < input[0].length; j++){
//
//     // }
// }
//
// console.log(result)
//
// // 숫자 + 문자 = 문자 1 + ' '
// // 문자 + 문자 = 문자 '' + 1 + ' '
// // '' + 1 + ' '  += 0 + ' '  // 1 0