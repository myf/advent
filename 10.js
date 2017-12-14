const lice = [157,222,1,2,177,254,0,228,159,140,249,187,255,51,76,30];

const str = '157,222,1,2,177,254,0,228,159,140,249,187,255,51,76,30';
const l2 = str.split('').map(x => x.charCodeAt(0));
const ending = [17, 31, 73, 47, 23];
const l3 = [...l2, ...ending];
//const lice = [3,4,1,5];
const knot = (lice, time) => {
    let skip = 0;
    const gl = (num) => [...Array(num).keys()];
    let list = gl(256);
    let pos = 0;

    const iter = (num) => {
        const sublist_pos = gl(num).map(n => (pos + n) % list.length);
        const sublist_val = sublist_pos.map(n => list[n]);
        const rev = sublist_val.reverse();
        for (let i=0; i<rev.length; i++) {
            list[sublist_pos[i]] = rev[i];
        }
        pos = (pos + num + skip) % list.length;
        skip = skip + 1;
    };

    for (let t=0; t<time; t++) {
        for (let j=0; j<lice.length; j++) {
            iter(lice[j]);
        }
    }
    return list;
};
console.log(knot(lice, 1));

const sparse_hash = knot(l3, 64);


let arr =[];
for (let i=0; i<16; i++) {
    arr.push(sparse_hash.slice(i*16,i*16+16));
}

const zeropad = n => ('0' + n).substr(-2);
const res = arr.map((a) => a.reduce((acc, cur) => acc^cur)).map((a) => zeropad(a.toString(16))).join('');
console.log(res);

