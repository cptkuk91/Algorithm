let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
// 이를 통해서 indexOf 를 사용해야하는 걸 알 수 있다.

let result = '';

for (let i = 97; i <= 122; i++) {
    // a 부터 z 까지 출력해야한다.
    let index = input[0].indexOf(String.fromCharCode(i));
    // input[0] 값에서 a 의 위치를 찾고, 없을 경우 indexOf 를 통해 자동 -1 로 반환된다.
    // indexOf 에 특별한 조건을 안줄 경우 첫 숫자를 찾는다.
    result += index + ' ';
}

console.log(result);
