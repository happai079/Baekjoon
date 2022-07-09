const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

let tc = +input[0];

for (let i = 1; i <= tc; i++) {
	let arr = input[i].split(' ').map((v) => +v);
	const student = arr.shift();
	const scores = arr;

	const avg =
		scores.reduce(
			(previousValue, currentValue) => previousValue + currentValue,
			0
		) / student;

	const overAvg = scores.filter((el) => el > avg);
	const answer = ((overAvg.length / student) * 100).toFixed(3);
	console.log(`${answer}%`);
}