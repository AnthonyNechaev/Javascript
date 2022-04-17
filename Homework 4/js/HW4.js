'use strict';
let arr = [-4, 56, -2, 0, -12, 342];
let negative = [];
for (let num of arr) {
    if (num < 0) {
        negative.push(num);
    }
}
console.log(negative);

let randArr = [];
for (let i = 0; i < 7; i++) {
    let number = Math.floor((Math.random() * 300) + 5);
    randArr.push(number);
}
let max = Math.max(...randArr);
let min = Math.min(...randArr);
console.log(randArr);
console.log(min, max);
let temp = randArr[randArr.indexOf(max)];
randArr[randArr.indexOf(max)] = randArr[randArr.indexOf(min)];
randArr[randArr.indexOf(min)] = temp;
console.log(randArr);

let usersArr = [];
while (true) {
    let usersString = prompt("Введите строку для добавления в массив. 0 - выход");
    if (usersString == 0) break;
    if (!(usersArr.includes(usersString))) usersArr.push(usersString);
}
console.log(usersArr);