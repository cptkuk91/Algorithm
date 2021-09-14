const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let input = [];

rl.on('line', function (line){
    input.push(line);
}).on('close', function (){
    const T = Number(input[0]);

    for(let i = 1; i <= T; i++){
        const a = Number(input[i].split(' ')[0]);
        const b = Number(input[i].split(' ')[1]);
        console.log(a+b);
    }

   process.exit();
});