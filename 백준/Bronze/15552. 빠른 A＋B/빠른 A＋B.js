const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const tc = Number(input[0]);
let result = '';

for(let i = 1; i <= tc; i++ ) {
    let num = input[i].split(' ')
    result += Number(num[0]) + Number(num[1]) + '\n'; 
}

console.log(result)