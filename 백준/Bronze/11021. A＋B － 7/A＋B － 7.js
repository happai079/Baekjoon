let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const tc = +input[0];

for(let i = 1; i <= tc; i++) {
    const [num1, num2] = input[i].split(' ').map(v => +v);
    console.log(`Case #${i}: ${num1+num2}`);
}