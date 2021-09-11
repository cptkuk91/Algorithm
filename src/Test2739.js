const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

// let input = [];

rl.on('line', function (line){
    let num1 = Number(line);

    for(let i = 1; i <= 9; i++){
        console.log(`${num1} * ${i} = ${num1 * i}`);
    }
}).on('close', function (){
   process.exit();
});