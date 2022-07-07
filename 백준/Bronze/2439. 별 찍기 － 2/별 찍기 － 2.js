let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);
for(let i = 0; i < num; i++) {
    console.log(' '.repeat(num-i-1) + '*'.repeat(i+1));
}