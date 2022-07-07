let input = require('fs').readFileSync('/dev/stdin').toString();

let dan = +input;

for(let i = 0; i < 9; i++) {
    console.log(`${dan} * ${i+1} = ${dan*(i+1)}`);
}