let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let arr = [1, 1, 2, 2, 2, 8];
arr = arr.map((it, idx) => it - input[idx]);
console.log(...arr);