let arr = [];

for (let i = 1; i <= 10000; i++) {
    let stringNumber = String(i); // 135 는 '1' '3' '5' // 9875 는 '9''8''7''5'
    let dNumber = i; // 1 // 9950
    for (let j = 0; j < stringNumber.length; j++) {
        dNumber += Number(stringNumber[j]);
        // 1 + 1 = 2
        // 1 + 3 = 4
        // 1 + 5 = 6
        // ==========
        // 9950 + 9 = 9959
        // 9950 + 8 = 9958
        // 9950 + 7 = 9957
    }
    arr.push(dNumber);
    // 2, 4, 6, 9959 , 9958, 9957 제외한 수를 indexOf를 통해서 출력
}

for (let i = 1; i <= 10000; i++) {
    if (arr.indexOf(i) === -1) {
        console.log(i)
    }
}