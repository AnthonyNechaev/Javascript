'use strict';
function progression (start, end, step = 1) {
    let arr = [];
    let num = start;
    while (num <= end) {
        arr.push(num);
        num += step;
    }
    if (!(arr.includes(end))) arr.push(end); //добавил на случай, если конец не входит в прогрессию
    return arr;
}

console.log(progression(2, 7, 2));

function spam (text, ...spamWords) {
    let textArr = text.split(" ");
    let i = 0;
    let message;
    for (let elem of textArr) {
        for (let spamWord of spamWords) {
        if (elem === spamWord) i++;
        }
    }
    if (i <= 3) {
        message = 1;
        return message;
    }
    if (i <= 6) {
        message = 2;
        return message;
    }
    if (i <= 9) {
        message = 3;
        return message;
    }
    if (i <= 12) {
        message = 4;
        return message;
    }
    message = 5;
    return message;
}
console.log(spam("abc def gh ijk dfh gh gh", "abc", "def", "gh", "ijk"));