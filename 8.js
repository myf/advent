const fs = require('fs');

let dict = {};
let max = {};
const mani = (str) =>  {
    const [p1, direction, num, _, p2, cond, num2] = str.split(' ');
    dict[p1] = dict[p1] || 0;
    dict[p2] = dict[p2] || 0;
    const dir = direction == "inc" ? 1 : -1;
    const setence = `if (dict['${p2}'] ${cond} ${num2}) {dict['${p1}'] = dict['${p1}'] + (${dir} * ${num})}`;
    eval(setence);
    max[p1] = max[p1] > dict[p1] ? max[p1] : dict[p1];

};

fs
    .readFileSync('8.txt')
    .toString()
    .trim()
    .split('\n')
    .map(mani);

console.log(dict);
console.log(max);
