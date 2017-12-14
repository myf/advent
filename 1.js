const fs = require('fs');

fs.readFile('1.txt', (err, res) => {
    const r = res
        .toString()
        .split('')
        .reduce((acc, cur) => {
            cur = Number(cur);
            if (acc.prev === cur) {
                acc.sum += cur;
            }
            acc.prev = cur;
            return acc;
        }, {prev:8,
            sum: 0});
    return r.sum;
});

fs.readFile('1.txt', (err, res) => {
    const r = res
        .toString()
        .split('')
        .slice(0, -1)
        .reduce((acc, cur, ind, arr) => {
            cur = Number(cur);
            let halfway = Number(arr[(ind + arr.length/2) % arr.length]);
            if (halfway === cur) {
                acc += cur;
            }
            return acc;
        }, 0);
    return r;
});

