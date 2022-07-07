const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let i = 1; i <= input[0]; i++) {
    const nums = input[i].split(' ');
    const a = Number(nums[0]);
    const b = Number(nums[1]);
    console.log(`Case #${i}: ${a} + ${b} = ${a+b}`)
}