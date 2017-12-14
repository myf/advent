const fs = require('fs');

const dict = fs
    .readFileSync('13.txt')
    .toString()
    .trim()
    .split('\n')
    .map(s => s.split(': ').map(Number))
    .reduce((acc, cur) => {
        acc[cur[0]] = cur[1];
        return acc;
    }, {});

const position = (second, depth) => {
    // 0<->1<->2<->3
    // 0<->1<->2<->3<->2<->1
    const orig = [...Array(depth).keys()];
    const middle = orig.slice(1, orig.length-1);
    const full = [...orig, ...middle];
    return full[second % full.length];
};

const severity = (delay) =>  Object.keys(dict)
    .filter((d)=> position(Number(d) + delay, dict[d]) === 0)
    .map((d) => Number(d) * dict[d])
    .reduce((a,c)=> a+c);

const severity_p = (delay) =>  Object.keys(dict)
    .filter((d)=> (Number(d) + delay) % (2 * dict[d] - 2) === 0)
    .map((d) => Number(d) * dict[d])
    .reduce((a,c)=> a+c);

const list = Object.keys(dict);

const caught = (delay) => list
    .some((d)=> (Number(d) + delay) % (2 * dict[d] - 2) === 0);

const get_delay = () => {
    let delay = 0;
    while (1) {
        if (!caught(delay)) return delay; 
        delay ++;
    }
};

console.log(get_delay());
