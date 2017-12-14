const fs = require('fs');

let list = fs
    .readFileSync('6.txt')
    .toString()
    .trim()
    .split('\t')
    .map(Number);

const distribute = (list) => {
    let start = Math.max.apply(null, list);
    let idx = list.indexOf(start);
    list[idx] = 0;
    while (start) {
        idx = (idx + 1) % list.length;
        list[idx] ++;
        start --;
    }
    return list;
};

let cond = true;
let history = [];
while (cond) {
    list = distribute(list);
    let jlist = JSON.stringify(list);
    if (history.includes(jlist)) {
        cond = false;
    }
    history.push(jlist);
}
console.log(history.length, list);
