const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let i = 1; i <= input[0]; i++) { // 처음 받은 테스트 수 만큼 반복
    let nums = input[i].split(' ').map((val) => {return parseInt(val)}); // num을 공백을 기준으로 나눔
   
    console.log(nums[0] + nums[1]);
}