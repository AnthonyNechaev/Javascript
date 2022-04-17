'use strict';
let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];
function sortArrs (a, b) {
    if (a.length === b.length) return 0;
    if (a.length > b.length) return 1;
    return -1;
}
numbers.sort(sortArrs);
console.log(numbers);

let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];
function randPresent (a, b) {
    a = Math.random();
    b = Math.random();
    if (a === b) return 0;
    if (a > b) return 1;
    return -1;
}
presents.sort(randPresent);
console.log(presents);

let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];
let comparing = elem => second.includes(elem);
let third = first.filter(comparing);
console.log(third);

let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];
let booleanTemp = [];
for (let elem of temperatures) {
    booleanTemp.push(elem.some(i => i>500));
}
console.log(booleanTemp.some(x => x));