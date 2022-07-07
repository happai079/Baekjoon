const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const x = Number(input[0].split(' ')[1]);
const inputArr = input[1].split(' ').map(val => Number(val));

const answer = inputArr.filter(val => x > val);

console.log(answer.join(' '));