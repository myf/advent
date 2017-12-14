const fs = require('fs');
const file_list = fs
    .readFileSync('5.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => Number(e) );


const elist = [0, 3, 0, 1, -3];

const iter = (list) => {
    let idx = 0;

    let acc = 0;
    while (true) {
        //console.log(acc, idx);
        if ((idx > list.length - 1) || (idx < 0)) {
            console.log('wowza');
            console.log(acc, idx, list.length);
            process.exit(1);
        }
        let new_idx = idx + list[idx];
        list[idx] = list[idx] >= 3 ?
            list[idx] = list[idx] - 1:
            list[idx] = list[idx] + 1;
        idx = new_idx;
        acc ++;
        //console.log(acc, idx);
    }
};
iter(file_list);
