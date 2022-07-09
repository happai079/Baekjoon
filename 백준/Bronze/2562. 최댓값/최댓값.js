let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.split('\n')
	.map((v) => +v);

const max = Math.max(...input);
const index = input.indexOf(max);
console.log(max);
console.log(index + 1);