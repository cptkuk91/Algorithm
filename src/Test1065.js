const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
    if (String(i).length <= 2) {
        count++;
    } else {
        let stringNumber = String(i)
        // string 값을 숫자로 변환해주자. 135 // 여기서 바로 변환이 아니다.
        let hsCheck = Number(stringNumber[0] - stringNumber[1]);
        for (let j = 2; j < stringNumber.length; j++) {
            if (Number(stringNumber[j - 1] - stringNumber[j] !== hsCheck)) {
                break;
            } else {
                count++;
            }
        }
    }
}

console.log(count);