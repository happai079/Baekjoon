const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let answer = '';
let i = 0;
while( i < input.length ) {
    let a = Number(input[i].split(' ')[0]);
    let b = Number(input[i].split(' ')[1]);
    
    if(a == 0 && b == 0) {
        break;
    }else {
        answer += `${a+b}\n`;
    }
    i++;
}

console.log(answer)