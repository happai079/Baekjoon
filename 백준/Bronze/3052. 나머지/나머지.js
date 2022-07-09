const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
    .trim()
	.split('\n')
	.map((v) => +v % 42);

console.log(new Set(input).size);