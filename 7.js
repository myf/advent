const fs = require('fs');
let dict = {};

const mani = (s) => {
    var arrow = /->/;
    var paren = /\(([^)]+)\)/;
    let num = Number(s.match(paren)[1]);
    let word = s.split(' ')[0];
    if (s.match(arrow)) {
        let attr = s.split(' -> ')[1].split(', ');
        dict[word] = {
            'number' : num,
            'attr': attr 
        };
    } else {
        dict[word] = {'number': num};
    }
};

fs
    .readFileSync('7.txt')
    .toString()
    .trim()
    .split('\n')
    .map(mani);
    
//yay
//

const root = 'vtzay';

const get_weight = (word) => {
    let num = dict[word].number;
    if (dict[word].attr) {
        return num + dict[word].attr.map(get_weight).reduce((acc, cur) => acc + cur);
    } else {
        return num;
    }
};

let x= get_weight('mgdjgzf');
console.log(x);
let m = dict['lnpuarm'].attr.map((a) => [a, get_weight(a), dict[a].number]);
console.log(m);
