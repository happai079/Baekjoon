const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let scores = input[1].split(' ').map((v) => +v);
const max = Math.max(...scores);
scores = scores.map((v) => (v / max) * 100);

let sum = 0;
for (let i = 0; i < scores.length; i++) {
	sum += scores[i];
}

console.log(sum / scores.length);