const input = Number(require('fs').readFileSync('/dev/stdin').toString());

let N = input;
let sum;
let answer = 0;

while (true) {
    answer++

    sum = Math.floor(N / 10) + (N % 10);
    N = ((N % 10) * 10) + (sum % 10);

    if (N === input) {
        break;
    }
}

console.log(answer);