const num = Number(require('fs').readFileSync('/dev/stdin').toString());

let result = '';

for(let i = 1;  i <= num; i++ ) {
    result += i + '\n';
}

console.log(result);