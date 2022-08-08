let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const total = +input[0];
let sum = 0;

for (let i = 2; i < input.length; i++) {
	let items = input[i].split(' ').map((it) => +it);
	const itemCost = items[0] * items[1];
	sum += itemCost;
}

console.log(total === sum ? 'Yes' : 'No');