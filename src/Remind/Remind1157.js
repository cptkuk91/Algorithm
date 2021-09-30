let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let alpha = input[0].toUpperCase();
let dict = {}

for (let i = 0; i < alpha.length; i++) {
    if (alpha[i] in dict) {
        dict[alpha[i]]++
        // 단어 하나하나 dict에 넣어준다.
    } else {
        dict[alpha[i]] = 1;
        // 처음 입력하는 경우 기본 값으로 1을 설정해주자.
    }
}

let sortDict = [];
for (let key in dict) {
    sortDict.push([key, dict[key]]);
    // [m,4], [i,1], [s,4] 이런식으로 들어간다.
}

sortDict.sort(function (a, b) {
    return b[1] - a[1];
});

if (alpha.length <= 1) {
    console.log(alpha);
} else {
    if (sortDict[0][1] === sortDict[1][1]) {
        console.log("?");
    } else {
        console.log(sortDict[0][0]);
    }
}

