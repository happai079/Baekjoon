const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const tc = +input[0];

for (let i = 1; i <= tc; i++) {
	let tLength = +input[i].length;
	let sum = 0;
	let score = 0;

	for (let j = 0; j < tLength; j++) {
		if (input[i][j] === 'O') {
			score++;
		} else {
			score = 0;
		}
		sum += score;
	}
	console.log(sum);
}