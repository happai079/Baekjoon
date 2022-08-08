let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

let count = 0;

for (let i = 1; i <= +input; i++) {
	let stringNum = String(i);

	if (i < 100) {
		count++;
		continue;
	}
    
    // 각 자리의 차이 비교
	let a = +stringNum[0] - +stringNum[1];
	let b = +stringNum[1] - +stringNum[2];

	if (a === b) {
		count++;
	}
}

console.log(count);