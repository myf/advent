const fs = require('fs');

const list = fs
    .readFileSync('11.txt')
    .toString()
    .trim()
    .split(',');

let n = 0
let e = 0
let max = 0
let min = 0
for (let i=0; i<list.length; i++) {
    let t = list[i];
    if (t === 's') n--;
    if (t === 'n') n++;
    if (t === 'se') {n-=0.5;e+=0.5}
    if (t === 'sw') {n-=0.5;e-=0.5}
    if (t === 'ne') {n+=0.5;e+=0.5}
    if (t === 'nw') {n+=0.5;e-=0.5}
    if(max < (n+e)) { max = n+e}
    if(min > (n+e)) {min = n+e}
}
console.log(n,e, max, min);



    


