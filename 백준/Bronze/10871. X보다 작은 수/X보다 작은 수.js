let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const maxNum = +input[0].split(' ')[1];
const resultArr = input[1].split(' ').filter((v) => +v < maxNum);

console.log(resultArr.join(' '));