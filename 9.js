const fs = require('fs');
const th = require('through2');
const split = require('split');

let ignore = 0;
let garbage = 0;
let score = 0;
let sum = 0;
let garsum = 0;

const trans = th(function(c, enc, cb) {
    const chunk = String(c);
    if (garbage) {
        if (ignore) {
            ignore --;
        } else {
            if (chunk === '!') {
                ignore = 1;
            } else if (chunk === '>') {
                garbage = 0;
            } else {
                garsum ++;
            }
        }
    } else {
        if (chunk === '<') {
            garbage = 1;
        } else {
            this.push(c);
        }
    }
    cb();
        
});

const count = th(function(c, env, cb) {
    const chunk = String(c);
    if (chunk === '{') {
        score ++;
    }
    if (chunk === '}') {
        sum += score;
        score --;
    }
    cb();
});

fs
    .createReadStream('9.txt')
    .pipe(split(/(?!$)/))
    .pipe(trans)
    .pipe(count)
    .on('finish', () => {
        console.log(sum);
        console.log(garsum);
    });
