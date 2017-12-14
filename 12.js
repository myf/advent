const fs = require('fs');

let d = {};

const mani = (m) => {
    //'72 <-> 747, 77'
    const [key, val] = m.split(' <-> ');
    const dict = val.split(', ').map(Number);
    d[Number(key)] = dict;
};

fs
    .readFileSync('12.txt')
    .toString()
    .trim()
    .split('\n')
    .map(mani);
    
const getnum = (num) => {
    let res = [];

    const member = (num) => {
        res.push(num);
        d[num].map((x) => {
            if (!res.includes(x)) {
                member(x);
            }
        });
        return res;

    };
    return member(num);
};


let groups = [];
const get_groups = () => {
    let list = [...Array(2000).keys()];
    while (list.length) {
        let g = getnum(list[0]);
        groups.push(g);
        list = list.filter((x) => !g.includes(x));
    }
};

get_groups();
console.log(groups.length);
