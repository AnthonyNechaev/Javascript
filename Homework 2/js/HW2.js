'use strict';
let count = 90;
if (count >= 90 && count <= 100) {
    console.log("Отлично");
} else if (count >= 60 && count <= 89) {
    console.log("Хорошо");
} else if (count >= 40 && count <= 59) {
    console.log("Удовлетворительно");
} else if (count >= 0 && count <= 39) {
    console.log("Попробуйте ещё раз");
}

let sum = 100;
let ticketNum = 1234;
switch (ticketNum) {
    case '4653':
        console.log(`К оплате ${sum * 0.7} р.`);
        break;
    case '5698':
    case '5111':
        console.log(`К оплате ${sum * 0.8} р.`);
        break;
    case '6922':
    case '6113':
    case '6099':
        console.log(`К оплате ${sum * 0.9} р.`);
        break;
    default:
        console.log(`К оплате ${sum} р.`);
        break;
}

let fairy = prompt("How much Fairy is there?");
let dishes = prompt("How much dishes is there?");
while (fairy > 0 && dishes > 0) {
    fairy -= 0.5;
    dishes--;
    console.log(`There are ${fairy} drops of Fairy`);
    if (fairy <= 0) console.log(`You failed. There are still ${dishes} plates.`);
    if (dishes <= 0) console.log(`Congratulations. You still have ${fairy} drops of Fairy.`);
}

let secret = Math.floor((Math.random() * 9) + 1);
console.log(secret);
while (true) {
    let usersNum = prompt("Какое число от 1 до 9 было загадано?");
    if (usersNum == 0) {
        console.log("Выход из программы");
        break;
    }
    if (usersNum > secret) {
        console.log("Загаданное число меньше");
    }
    if (usersNum < secret) {
        console.log("Загаданное число больше");
    } 
    if (usersNum == secret) {
        console.log("Вы угадали!");
        break;
    }
}


