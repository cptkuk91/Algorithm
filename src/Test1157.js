let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let str = input[0].toUpperCase()
let dict = {}

for (let i = 0; i < str.length; i++) {
    if (str[i] in dict) {
        dict[str[i]]++
    } else {
        dict[str[i]] = 1
    }
}

let sortedDict = []
for (let key in dict) {
    sortedDict.push([key, dict[key]])
}

sortedDict.sort(function (a, b) {
    return b[1] - a[1];
});

if (str.length <= 1) {
    console.log(str)
} else {
    if (sortedDict[0][1] === sortedDict[1][1]) {
        console.log("?")
    } else {
        console.log(sortedDict[0][0])
    }
}

// sortedDict[0] // [사용한 문자, 갯수]
// sortedDict[0][0] // 가장 많이 사용된 문자