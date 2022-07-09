let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.split('\n')[1]
	.split(' ');

let arr = input.map((v) => +v);

console.log(Math.min(...arr) + ' ' + Math.max(...arr));