'use strict';
let count = prompt("Сколько товаров осталось?");
let div10 = count % 10;
let ending;
switch (div10) {
    case 1:
        ending = "";
        break;
    case 2:
    case 3:
    case 4:
        ending = "a";
        break;
    default:
        ending = "ов";
        break;
}
if ((count % 100) >= 11 && (count % 100) <= 14) {
    ending = "ов";
}
console.log(`${count} товар${ending}`);