"use strict";
let sum = 134990;
let result;
result = sum > 100000 ? `${sum * 0,9}` : `${sum}`;
console.log(result);

let a = 45;
let c = a % 10;
let b = a / 10 - c;
let sumCB = c + b;
console.log(sumCB);

let x = 2, y = 5;
y = x + y;
x = y - x;
y = y - x;
console.log(x, y);